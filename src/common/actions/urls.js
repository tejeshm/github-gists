const GITHUB_GET_GISTS_URL = "https://api.github.com/users/{username}/gists";
// const GITHUB_GET_FORKS_URL = " https://api.github.com/gists/{gist_id}/forks";

const replaceUrlWithParam = (url, param) => {
    return url.replace(/\s*\{.*?\}\s*/g, param)
}

export const getGithubGistsFromUsernameUrl = (username) => {
    return replaceUrlWithParam(GITHUB_GET_GISTS_URL, username);
}