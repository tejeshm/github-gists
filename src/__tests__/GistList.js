import { render, screen } from '@testing-library/react';
import GistList from '../containers/UserGists/GistList';
const gists = [{
    "url": "https://api.github.com/gists/f80a4cd87e7034bea5264f7d8c431b4e",
    "forks_url": "https://api.github.com/gists/f80a4cd87e7034bea5264f7d8c431b4e/forks",
    "commits_url": "https://api.github.com/gists/f80a4cd87e7034bea5264f7d8c431b4e/commits",
    "id": "f80a4cd87e7034bea5264f7d8c431b4e",
    "node_id": "MDQ6R2lzdGY4MGE0Y2Q4N2U3MDM0YmVhNTI2NGY3ZDhjNDMxYjRl",
    "git_pull_url": "https://gist.github.com/f80a4cd87e7034bea5264f7d8c431b4e.git",
    "git_push_url": "https://gist.github.com/f80a4cd87e7034bea5264f7d8c431b4e.git",
    "html_url": "https://gist.github.com/f80a4cd87e7034bea5264f7d8c431b4e",
    "files": {
        "typescript-crash.ts": {
            "filename": "typescript-crash.ts",
            "type": "video/MP2T",
            "language": "TypeScript",
            "raw_url": "https://gist.githubusercontent.com/bradtraversy/f80a4cd87e7034bea5264f7d8c431b4e/raw/bbb384441e0c1f92d21eb2c442a6c0b4ca373657/typescript-crash.ts",
            "size": 2136
        }
    },
    "public": true,
    "created_at": "2021-08-17T17:58:23Z",
    "updated_at": "2021-08-20T16:20:24Z",
    "description": "Basic intro to TypeScript",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/f80a4cd87e7034bea5264f7d8c431b4e/comments",
    "owner": {
        "login": "bradtraversy",
        "id": 5550850,
        "node_id": "MDQ6VXNlcjU1NTA4NTA=",
        "avatar_url": "https://avatars.githubusercontent.com/u/5550850?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/bradtraversy",
        "html_url": "https://github.com/bradtraversy",
        "followers_url": "https://api.github.com/users/bradtraversy/followers",
        "following_url": "https://api.github.com/users/bradtraversy/following{/other_user}",
        "gists_url": "https://api.github.com/users/bradtraversy/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bradtraversy/subscriptions",
        "organizations_url": "https://api.github.com/users/bradtraversy/orgs",
        "repos_url": "https://api.github.com/users/bradtraversy/repos",
        "events_url": "https://api.github.com/users/bradtraversy/events{/privacy}",
        "received_events_url": "https://api.github.com/users/bradtraversy/received_events",
        "type": "User",
        "site_admin": false
    },
    "truncated": false
}];
const sampleProps = {
    searched: false,
    list:[],
    loading: false,
    getFork: jest.fn()
}

test('Shows loading while the api call is going through.', () => {
    let props = Object.assign(sampleProps, {loading:true});
    render(<GistList {...props} />);
    const svgElement = screen.getByTestId('loading')
    expect(svgElement).toBeInTheDocument();
});

test('Shows error if api fails or list is empty.', () => {
    let props = Object.assign(sampleProps, {searched:true, list:[], loading:false});
    render(<GistList {...props} />);
    const errorElement = screen.getByTestId('error')
    expect(errorElement).toBeInTheDocument();
});

test('Shows the list of gists if data is available.', () => {
    let props = Object.assign(sampleProps, {searched:true, loading: false, list: gists, forks:[]})
    render(<GistList {...sampleProps} />);
    const errorElement = screen.getByTestId('gist-list')
    expect(errorElement).toBeInTheDocument();
});