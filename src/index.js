const originalTv4 = require("tv4")
const Commands = require("./commands.js")
const originalMustache = require("mustache")
const http = require("http")
const https = require("https")
const axios = require("axios")
const debug0 = require("debug")

const originalDebug = debug0('vaultaire')

class VaultError extends Error {}

class ApiResponseError extends VaultError {
  constructor(message, response) {
    super(message)
    this.response = {
      statusCode: response.statusCode,
      body: response.body,
    }
  }
}

function NodeVault(config = {}) {
  // load conditional dependencies
  const debug = config.debug || originalDebug
  const tv4 = config.tv4 || originalTv4
  const commands = config.commands || Commands
  const mustache = config.mustache || originalMustache

  let requestPromise = (config['request-promise'] || axios)

  // This code sets axios.create.request as the default
  // Request function
  // that NodeVault will use
  if (requestPromise != null && requestPromise.create != null) {
    requestPromise = requestPromise.create({
    })
    if (requestPromise != null && requestPromise.options != null) {
      // Set Default Options fo this requestPromise
      // Handles strictSSL config of Old API
      const strictSSL = !process.env.VAULT_SKIP_VERIFY
      requestPromise.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: strictSSL })
      requestPromise.defaults.httpAgent = new http.Agent()
      // Handles Params
      // simple && resolveWithFullResponse
      // Like Old API
      requestPromise.defaults.validateStatus = (_) => true && _
      // Handles json = true
      // Like Old API
      requestPromise.defaults.responseType = 'json'
    }
    if (requestPromise != null && requestPromise.request != null) {
      requestPromise = requestPromise.request
    }
  }
  const client = {}

  function handleVaultResponse(response) {
    if (!response) return Promise.reject(new VaultError('No response passed'))
    response.statusCode = response.statusCode || response.status
    response.body = response.body || response.data
    debug(response.statusCode)
    if (response.statusCode !== 200 && response.statusCode !== 204) {
      // handle health response not as error
      if (response.request.path.match(/sys\/health/) !== null) {
        return Promise.resolve(response.body)
      }
      let message
      if (response.body && response.body.errors && response.body.errors.length > 0) {
        message = response.body.errors[0]
      } else {
        message = `Status ${response.statusCode}`
      }
      const error = new ApiResponseError(message, response)
      return Promise.reject(error)
    }
    return Promise.resolve(response.body)
  }

  client.handleVaultResponse = handleVaultResponse

  // defaults
  client.apiVersion = config.apiVersion || 'v1'
  client.endpoint = config.endpoint || process.env.VAULT_ADDR || 'http://127.0.0.1:8200'
  client.pathPrefix = config.pathPrefix || process.env.VAULT_PREFIX || ''
  client.token = config.token || process.env.VAULT_TOKEN
  client.noCustomHTTPVerbs = config.noCustomHTTPVerbs || false
  client.namespace = config.namespace || process.env.VAULT_NAMESPACE

  client.endpoint = client.endpoint.replace(/\/$/, '')

  const requestSchema = {
    type: 'object',
    properties: {
      path: {
        type: 'string',
      },
      method: {
        type: 'string',
      },
    },
    required: ['path', 'method'],
  }

  // Handle any HTTP requests
  client.request = (options = {}) => {
    const valid = tv4.validate(options, requestSchema)
    if (!valid) return Promise.reject(tv4.error)
    let uri = `${client.endpoint}/${client.apiVersion}${client.pathPrefix}${options.path}`
    // Replace unicode encodings.
    uri = uri.replace(/&#x2F;/g, '/')
    options.headers = options.headers || {}
    if (typeof client.token === 'string' && client.token.length) {
      options.headers['X-Vault-Token'] = options.headers['X-Vault-Token'] || client.token
    }
    if (typeof client.namespace === 'string' && client.namespace.length) {
      options.headers['X-Vault-Namespace'] = client.namespace
    }
    options.url = uri
    debug(options.method, options.url)
    // Old API relied on options.uri
    // Axios uses options.url
    // Added to ensure compatibility with Old API
    options.uri = options.url
    // Axios uses options.data
    // Merge Data Received from Old API into new one
    options.data = Object.assign({}, options.data, options.json)
    // Old API relied on options.json
    // Added to ensure compatibility with Old API
    options.json = options.data

    if (options.data && Object.keys(options.data).length > 0) debug(options.data)
    return requestPromise(options).then(client.handleVaultResponse)
  }

  client.help = (path, requestOptions) => {
    debug(`help for ${path}`)
    const options = Object.assign({}, config.requestOptions, requestOptions)
    options.path = `/${path}?help=1`
    options.method = 'GET'
    return client.request(options)
  }

  client.write = (path, data, requestOptions) => {
    debug('write %o to %s', data, path)
    const options = Object.assign({}, config.requestOptions, requestOptions)
    options.path = `/${path}`
    options.json = data
    options.method = 'PUT'
    return client.request(options)
  }

  client.read = (path, requestOptions) => {
    debug(`read ${path}`)
    const options = Object.assign({}, config.requestOptions, requestOptions)
    options.path = `/${path}`
    options.method = 'GET'
    return client.request(options)
  }

  client.list = (path, requestOptions) => {
    debug(`list ${path}`)
    const options = Object.assign({}, config.requestOptions, requestOptions)
    options.path = `/${path}`

    if (client.noCustomHTTPVerbs) {
      options.path = `/${path}?list=1`
      options.method = 'GET'
    } else {
      options.path = `/${path}`
      options.method = 'LIST'
    }
    return client.request(options)
  }

  client.delete = (path, requestOptions) => {
    debug(`delete ${path}`)
    const options = Object.assign({}, config.requestOptions, requestOptions)
    options.path = `/${path}`
    options.method = 'DELETE'
    return client.request(options)
  }

  function validate(json, schema) {
    // ignore validation if no schema
    if (schema === undefined) return Promise.resolve()
    const valid = tv4.validate(json, schema)
    if (!valid) {
      debug(tv4.error.dataPath)
      debug(tv4.error.message)
      return Promise.reject(tv4.error)
    }
    return Promise.resolve()
  }

  function extendOptions(conf, options, args = {}) {
    const hasArgs = Object.keys(args).length > 0
    if (!hasArgs) return Promise.resolve(options)

    const querySchema = conf.schema.query
    if (querySchema) {
      const params = []
      for (const key of Object.keys(querySchema.properties)) {
        if (key in args) {
          params.push(`${key}=${encodeURIComponent(args[key])}`)
        }
      }
      if (params.length > 0) {
        options.path += `?${params.join('&')}`
      }
    }

    const reqSchema = conf.schema.req
    if (reqSchema) {
      const json = {}
      for (const key of Object.keys(reqSchema.properties)) {
        if (key in args) {
          json[key] = args[key]
        }
      }
      if (Object.keys(json).length > 0) {
        options.json = json
      }
    }

    return Promise.resolve(options)
  }

  function generateFunction(name, conf) {
    client[name] = (args = {}) => {
      const options = Object.assign({}, config.requestOptions, args.requestOptions)
      options.method = conf.method
      // replace args in path.
      options.path = mustache.render(conf.path, args)
      // no schema object -> no validation
      if (!conf.schema) {
        if (options.method === 'POST' || options.method === 'PUT') {
          options.json = args
        }
        return client.request(options)
      }
      // else do validation of request URL and body
      let promise = validate(args, conf.schema.req)
      .then(() => validate(args, conf.schema.query))
      .then(() => extendOptions(conf, options, args))
      .then((extendedOptions) => client.request(extendedOptions))

      if (conf.tokenSource) {
        promise = promise.then(response => {
          const candidateToken = response.auth && response.auth.client_token
          if (candidateToken) {
            client.token = candidateToken
          }
          return response
        })
      }

      return promise
    }
  }

  client.generateFunction = generateFunction

  // protecting global object properties from being added
  // enforcing the immutable rule: https://github.com/airbnb/javascript#iterators-and-generators
  // going the functional way first defining a wrapper function
  const assignFunctions = commandName => generateFunction(commandName, commands[commandName])
  Object.keys(commands).forEach(assignFunctions)

  return client
}
module.exports = NodeVault