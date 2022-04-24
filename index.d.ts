declare namespace NodeVault {
  interface AddApproleRoleReq {
    bind_secret_id?: boolean;
    bound_cidr_list?: string;
    policies?: string;
    secret_id_num_uses?: number;
    secret_id_ttl?: number;
    token_num_uses?: number;
    token_ttl?: number;
    token_max_ttl?: number;
    period?: number;
    [k: string]: unknown;
  }
  interface AddTokenRoleReq {
    allowed_policies?: string;
    disallowed_policies?: string;
    orphan?: boolean;
    period?: number;
    renewable?: boolean;
    path_suffix?: string;
    explicit_max_ttl?: number;
    [k: string]: unknown;
  }
  interface ApproleLoginReq {
    role_id: string;
    secret_id?: string;
    [k: string]: unknown;
  }
  interface ApproleLoginRes {
    auth?: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    warnings?: string;
    wrap_info?: string;
    data?: {
      [k: string]: unknown;
    };
    lease_duration?: number;
    renewable?: boolean;
    lease_id?: string;
    [k: string]: unknown;
  }
  interface ApproleLoginRes {
    auth?: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    warnings?: string;
    wrap_info?: string;
    data?: {
      [k: string]: unknown;
    };
    lease_duration?: number;
    renewable?: boolean;
    lease_id?: string;
    [k: string]: unknown;
  }
  interface ApproleSecretAccessorLookupReq {
    secret_id_accessor: string;
    [k: string]: unknown;
  }
  interface ApproleLoginRes {
    auth?: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    warnings?: string;
    wrap_info?: string;
    data?: {
      [k: string]: unknown;
    };
    lease_duration?: number;
    renewable?: boolean;
    lease_id?: string;
    [k: string]: unknown;
  }
  interface ApproleSecretDestroyReq {
    secret_id: string;
    [k: string]: unknown;
  }
  interface ApproleSecretLookupReq {
    secret_id: string;
    [k: string]: unknown;
  }
  interface ApproleLoginRes {
    auth?: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    warnings?: string;
    wrap_info?: string;
    data?: {
      [k: string]: unknown;
    };
    lease_duration?: number;
    renewable?: boolean;
    lease_id?: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginReq {
    role: string;
    iam_http_request_method: string;
    iam_request_url: string;
    iam_request_body: string;
    iam_request_headers: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface GcpLoginReq {
    role: string;
    jwt: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface GenerateRootInitReq {
    otp?: string;
    pgp_key?: string;
    [k: string]: unknown;
  }
  interface GenerateRootInitRes {
    started: boolean;
    nonce: string;
    progress: number;
    required: number;
    pgp_fingerprint: string;
    complete: boolean;
    [k: string]: unknown;
  }
  interface GenerateRootStatusRes {
    started: boolean;
    nonce: string;
    progress: number;
    required: number;
    pgp_fingerprint: string;
    complete: boolean;
    [k: string]: unknown;
  }
  interface GenerateRootUpdateReq {
    key: string;
    nonce: string;
    [k: string]: unknown;
  }
  interface GenerateRootUpdateRes {
    started: boolean;
    nonce: string;
    progress: number;
    required: number;
    pgp_fingerprint: string;
    complete: boolean;
    encoded_root_token?: string;
    [k: string]: unknown;
  }
  interface ApproleLoginRes {
    auth?: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    warnings?: string;
    wrap_info?: string;
    data?: {
      [k: string]: unknown;
    };
    lease_duration?: number;
    renewable?: boolean;
    lease_id?: string;
    [k: string]: unknown;
  }
  interface ApproleLoginRes {
    auth?: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    warnings?: string;
    wrap_info?: string;
    data?: {
      [k: string]: unknown;
    };
    lease_duration?: number;
    renewable?: boolean;
    lease_id?: string;
    [k: string]: unknown;
  }
  interface GetApproleRoleSecretReq {
    metadata?: string;
    cidr_list?: string[];
    [k: string]: unknown;
  }
  interface ApproleLoginRes {
    auth?: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    warnings?: string;
    wrap_info?: string;
    data?: {
      [k: string]: unknown;
    };
    lease_duration?: number;
    renewable?: boolean;
    lease_id?: string;
    [k: string]: unknown;
  }
  interface GithubLoginReq {
    token: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface HealthQuery {
    standbyok?: boolean;
    activecode?: number;
    standbycode?: number;
    sealedcode?: number;
    uninitcode?: number;
    [k: string]: unknown;
  }
  interface HealthRes {
    cluster_id?: string;
    cluster_name?: string;
    version?: string;
    server_time_utc?: number;
    standby?: boolean;
    sealed?: boolean;
    initialized?: boolean;
    [k: string]: unknown;
  }
  interface InitReq {
    secret_shares?: number;
    secret_threshold?: number;
    recovery_shares?: number;
    recovery_threshold?: number;
    pgp_keys?: string[];
    required?: ["secret_shares", "secret_threshold"];
    [k: string]: unknown;
  }
  interface InitRes {
    keys: string[];
    root_token: string;
    [k: string]: unknown;
  }
  interface KubernetesLoginReq {
    role: string;
    jwt: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface LdapLoginReq {
    password: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface LeaderRes {
    ha_enabled?: boolean;
    is_self?: boolean;
    leader_address?: string;
    [k: string]: unknown;
  }
  interface OktaLoginReq {
    password: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface RadiusLoginReq {
    password: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface RenewReq {
    lease_id: string;
    increment?: number;
    [k: string]: unknown;
  }
  interface RenewRes {
    lease_id?: string;
    renewable?: boolean;
    lease_duration?: number;
    [k: string]: unknown;
  }
  interface RevokeReq {
    lease_id: string;
    [k: string]: unknown;
  }
  interface StatusRes {
    sealed: boolean;
    t: number;
    n: number;
    progress: number;
    [k: string]: unknown;
  }
  interface TokenAccessorsRes {
    data: {
      keys?: string[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenCreateReq {
    id?: string;
    policies?: string[];
    meta?: {
      [k: string]: unknown;
    };
    no_parent?: boolean;
    no_default_policy?: boolean;
    renewable?: boolean;
    ttl?: string;
    explicit_max_ttl?: string;
    display_name?: string;
    num_uses?: number;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenCreateOrphanReq {
    id?: string;
    policies?: string[];
    meta?: {
      [k: string]: unknown;
    };
    no_parent?: boolean;
    no_default_policy?: boolean;
    renewable?: boolean;
    ttl?: string;
    explicit_max_ttl?: string;
    display_name?: string;
    num_uses?: number;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenCreateRoleReq {
    id?: string;
    policies?: string[];
    meta?: {
      [k: string]: unknown;
    };
    no_parent?: boolean;
    no_default_policy?: boolean;
    renewable?: boolean;
    ttl?: string;
    explicit_max_ttl?: string;
    display_name?: string;
    num_uses?: number;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenLookupReq {
    token: string;
    [k: string]: unknown;
  }
  interface TokenLookupRes {
    data: {
      id?: string;
      policies?: string[];
      path?: string;
      meta?: {
        [k: string]: unknown;
      };
      display_name?: string;
      num_uses?: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenLookupAccessorReq {
    accessor: string;
    [k: string]: unknown;
  }
  interface TokenLookupAccessorRes {
    data: {
      id?: string;
      policies?: string[];
      path?: string;
      meta?: {
        [k: string]: unknown;
      };
      display_name?: string;
      num_uses?: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenLookupSelfRes {
    data: {
      id?: string;
      policies?: string[];
      path?: string;
      meta?: {
        [k: string]: unknown;
      };
      display_name?: string;
      num_uses?: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenRenewReq {
    token: string;
    increment?: number | string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenRenewSelfReq {
    increment?: number | string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface TokenRevokeReq {
    token: string;
    [k: string]: unknown;
  }
  interface TokenRevokeAccessorReq {
    accessor: string;
    [k: string]: unknown;
  }
  interface TokenRevokeOrphanReq {
    token: string;
    [k: string]: unknown;
  }
  interface TokenRolesRes {
    data: {
      keys?: string[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface UnsealReq {
    key?: string;
    reset?: boolean;
    migrate?: boolean;
    [k: string]: unknown;
  }
  interface StatusRes {
    sealed: boolean;
    t: number;
    n: number;
    progress: number;
    [k: string]: unknown;
  }
  interface UnwrapReq {
    token?: string;
    [k: string]: unknown;
  }
  interface UpdateApproleRoleIdReq {
    role_id: string;
    [k: string]: unknown;
  }
  interface UserpassLoginReq {
    password: string;
    [k: string]: unknown;
  }
  interface AwsIamLoginRes {
    auth: {
      client_token?: string;
      policies?: string[];
      metadata?: {
        [k: string]: unknown;
      };
      lease_duration?: number;
      renewable?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }

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
    commands?: Array<{method: string; path: string; scheme: unknown}>;
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
    addApproleRole(options?: AddApproleRoleReq): Promise<unknown>;
    addPolicy(options?: Option): Promise<unknown>;
    addTokenRole(options?: AddTokenRoleReq): Promise<unknown>;
    approleLogin(options?: ApproleLoginReq): Promise<ApproleLoginRes>;
    approleRoles(options?: Option): Promise<ApproleRolesRes>;
    approleSecretAccessorDestroy(options?: Option): Promise<unknown>;
    approleSecretAccessorLookup(options?: ApproleSecretAccessorLookupReq): Promise<unknown>;
    approleSecretAccessors(options?: Option): Promise<ApproleSecretAccessorsRes>;
    approleSecretDestroy(options?: ApproleSecretDestroyReq): Promise<unknown>;
    approleSecretLookup(options?: ApproleSecretLookupReq): Promise<ApproleSecretLookupRes>;
    audits(options?: Option): Promise<unknown>;
    auths(options?: Option): Promise<unknown>;
    awsIamLogin(options?: AwsIamLoginReq): Promise<AwsIamLoginRes>;
    decryptData(options?: Option): Promise<unknown>;
    deleteApproleRole(options?: Option): Promise<unknown>;
    disableAudit(options?: Option): Promise<unknown>;
    disableAuth(options?: Option): Promise<unknown>;
    enableAudit(options?: Option): Promise<unknown>;
    enableAuth(options?: Option): Promise<unknown>;
    encryptData(options?: Option): Promise<unknown>;
    gcpLogin(options?: GcpLoginReq): Promise<GcpLoginRes>;
    generateDatabaseCredentials(options?: Option): Promise<unknown>;
    generateRootCancel(options?: Option): Promise<unknown>;
    generateRootInit(options?: GenerateRootInitReq): Promise<GenerateRootInitRes>;
    generateRootStatus(options?: Option): Promise<GenerateRootStatusRes>;
    generateRootUpdate(options?: GenerateRootUpdateReq): Promise<GenerateRootUpdateRes>;
    getApproleRole(options?: Option): Promise<GetApproleRoleRes>;
    getApproleRoleId(options?: Option): Promise<GetApproleRoleIdRes>;
    getApproleRoleSecret(options?: GetApproleRoleSecretReq): Promise<GetApproleRoleSecretRes>;
    getPolicy(options?: Option): Promise<unknown>;
    getTokenRole(options?: Option): Promise<unknown>;
    githubLogin(options?: GithubLoginReq): Promise<GithubLoginRes>;
    health(options?: HealthQuery): Promise<HealthRes>;
    init(options?: InitReq): Promise<InitRes>;
    initialized(options?: Option): Promise<unknown>;
    kubernetesLogin(options?: KubernetesLoginReq): Promise<KubernetesLoginRes>;
    ldapLogin(options?: LdapLoginReq): Promise<LdapLoginRes>;
    leader(options?: Option): Promise<LeaderRes>;
    mount(options?: Option): Promise<unknown>;
    mounts(options?: Option): Promise<unknown>;
    oktaLogin(options?: OktaLoginReq): Promise<OktaLoginRes>;
    policies(options?: Option): Promise<unknown>;
    radiusLogin(options?: RadiusLoginReq): Promise<RadiusLoginRes>;
    raftJoin(options?: Option): Promise<unknown>;
    remount(options?: Option): Promise<unknown>;
    removePolicy(options?: Option): Promise<unknown>;
    removeTokenRole(options?: Option): Promise<unknown>;
    renew(options?: RenewReq): Promise<RenewRes>;
    revoke(options?: RevokeReq): Promise<unknown>;
    revokePrefix(options?: Option): Promise<unknown>;
    rotate(options?: Option): Promise<unknown>;
    seal(options?: Option): Promise<unknown>;
    status(options?: Option): Promise<StatusRes>;
    stepDown(options?: Option): Promise<unknown>;
    tokenAccessors(options?: Option): Promise<TokenAccessorsRes>;
    tokenCreate(options?: TokenCreateReq): Promise<TokenCreateRes>;
    tokenCreateOrphan(options?: TokenCreateOrphanReq): Promise<TokenCreateOrphanRes>;
    tokenCreateRole(options?: TokenCreateRoleReq): Promise<TokenCreateRoleRes>;
    tokenLookup(options?: TokenLookupReq): Promise<TokenLookupRes>;
    tokenLookupAccessor(options?: TokenLookupAccessorReq): Promise<TokenLookupAccessorRes>;
    tokenLookupSelf(options?: Option): Promise<TokenLookupSelfRes>;
    tokenRenew(options?: TokenRenewReq): Promise<TokenRenewRes>;
    tokenRenewSelf(options?: TokenRenewSelfReq): Promise<TokenRenewSelfRes>;
    tokenRevoke(options?: TokenRevokeReq): Promise<unknown>;
    tokenRevokeAccessor(options?: TokenRevokeAccessorReq): Promise<unknown>;
    tokenRevokeOrphan(options?: TokenRevokeOrphanReq): Promise<unknown>;
    tokenRevokeSelf(options?: Option): Promise<unknown>;
    tokenRoles(options?: Option): Promise<TokenRolesRes>;
    unmount(options?: Option): Promise<unknown>;
    unseal(options?: UnsealReq): Promise<UnsealRes>;
    unwrap(options?: UnwrapReq): Promise<unknown>;
    updateApproleRoleId(options?: UpdateApproleRoleIdReq): Promise<unknown>;
    userpassLogin(options?: UserpassLoginReq): Promise<UserpassLoginRes>;
  }
}

declare function NodeVault(options?: NodeVault.VaultOptions): NodeVault.client;
export = NodeVault;
