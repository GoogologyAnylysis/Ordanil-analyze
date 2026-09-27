export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  GITHUB_APP_ID: string;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  GITHUB_PRIVATE_KEY: string;
  TARGET_REPO_OWNER: string;
  TARGET_REPO_NAME: string;
  BASE_BRANCH: string;
  RESYNC_SECRET: string;
}

export interface UserRow {
  github_id: number;
  node_id: string;
  login: string;
  name: string | null;
  avatar_url: string | null;
  installation_id: number | null;
  created_at: string;
  last_login_at: string;
}

/**
 * 命名空间归属表。
 * namespace 即用户的 GitHub login，作为该用户在仓库里的分支前缀。
 * 例如 namespace = "alice" 时，alice 可以推送 alice、alice/foo、alice/foo/bar，
 * 但不能推送 bob、bob/foo。
 */
export interface NamespaceRow {
  namespace: string;
  github_id: number;
  repo_owner: string;
  repo_name: string;
  base_branch: string;
  head_sha: string | null;
  protected: number;
  created_at: string;
  updated_at: string;
}

/** GitHub /user 返回里我们关心的字段。id 是不可变的真实 ID，node_id 用于 GraphQL。 */
export interface GitHubViewer {
  id: number;
  node_id: string;
  login: string;
  name: string | null;
  avatar_url: string | null;
}
