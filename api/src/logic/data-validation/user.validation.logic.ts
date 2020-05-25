export const isGithubUser = (data: any): boolean => {
  const isObject = data != null && typeof data == "object";
  const membersPresent =
    "login" in data &&
    "id" in data &&
    "avatar_url" in data &&
    "gravatar_id" in data &&
    "url" in data &&
    "html_url" in data &&
    "followers_url" in data &&
    "following_url" in data &&
    "gists_url" in data &&
    "starred_url" in data &&
    "subscriptions_url" in data &&
    "organizations_url" in data &&
    "repos_url" in data &&
    "events_url" in data &&
    "received_events_url" in data &&
    "type" in data &&
    "site_admin" in data &&
    "name" in data &&
    "company" in data &&
    "blog" in data &&
    "location" in data &&
    "email" in data &&
    "hireable" in data &&
    "bio" in data &&
    "public_repos" in data &&
    "public_gists" in data &&
    "followers" in data &&
    "following" in data &&
    "created_at" in data &&
    "updated_at" in data &&
    "private_gists" in data &&
    "total_private_repos" in data &&
    "owned_private_repos" in data &&
    "disk_usage" in data &&
    "collaborators" in data &&
    "two_factor_authentication" in data;

  return isObject && membersPresent;
};
