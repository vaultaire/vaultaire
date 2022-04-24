const { compile, DEFAULT_OPTIONS } = require('json-schema-to-typescript')
const { toSafeString } = require('json-schema-to-typescript/dist/src/utils')
const { format } = require('json-schema-to-typescript/dist/src/formatter')
const fs = require("fs")
const Commands = require("../src/commands")

const compilePromises = []
const commandDefs = []
const commandNames = Object.keys(Commands)
commandNames.sort()
for (const commandName of commandNames) {
    const command = Commands[commandName]
    let reqOpt = 'Option'
    let resOpt = 'unknown'
    if (command.schema) {
        for (const schemaType of Object.keys(command.schema)) {
            const typeName = `${commandName}_${schemaType}`
            if (schemaType === 'req' || schemaType === 'query') {
                reqOpt = toSafeString(`${commandName}_${schemaType}`)
            } else if (schemaType === 'res') {
                resOpt = toSafeString(`${commandName}_${schemaType}`)
            }
            compilePromises.push(
                compile(command.schema[schemaType], typeName, {
                    bannerComment: '',
                })
            )
        }
    }
    commandDefs.push(`${commandName}(options?: ${reqOpt}): Promise<${resOpt}>;`)
}

Promise.all(compilePromises).then((types) => {
    const typeString = types.join('').replace(/export /g, '')
    const content = `
    
declare namespace NodeVault {
    ${typeString}
    interface Option {
        [p: string]: unknown;
    }
    interface RequestOption extends Option {
        path: string;
        method: string;
    }
    
    interface functionConf {
        method: string;
        path: string;
        schema?: {
            req?: Option;
            query?: Option;
            res?: Option;
        };
    }
    
    interface VaultOptions {
        debug?(...args: unknown[]): unknown;
        tv4?(...args: unknown[]): unknown;
        commands?: Array<{ method: string, path: string, scheme: unknown }>;
        mustache?: unknown;
        "request-promise"?: unknown;
        Promise?: PromiseConstructor;
    
        apiVersion?: string;
        endpoint?: string;
        namespace?: string;
        noCustomHTTPVerbs?: boolean;
        pathPrefix?: string;
        token?: string;
    }
    
    interface client {
        ${commandDefs.join('\n')}
    }
}

declare function NodeVault(options?: NodeVault.VaultOptions): NodeVault.client;
export = NodeVault;

`
    fs.writeFileSync('./index.d.ts', format(content, DEFAULT_OPTIONS))
})