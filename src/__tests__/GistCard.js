import { render, screen, fireEvent } from '@testing-library/react';

import GistCard from '../containers/UserGists/GistCard';

const sampleProps = {
    gist: {
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
    },
    getFork: jest.fn()
}
let forks = [
    {
        "url": "https://api.github.com/gists/3e860880bcca6c084d1ae6e36ced0aa9",
        "forks_url": "https://api.github.com/gists/3e860880bcca6c084d1ae6e36ced0aa9/forks",
        "commits_url": "https://api.github.com/gists/3e860880bcca6c084d1ae6e36ced0aa9/commits",
        "id": "3e860880bcca6c084d1ae6e36ced0aa9",
        "node_id": "MDQ6R2lzdDNlODYwODgwYmNjYTZjMDg0ZDFhZTZlMzZjZWQwYWE5",
        "git_pull_url": "https://gist.github.com/3e860880bcca6c084d1ae6e36ced0aa9.git",
        "git_push_url": "https://gist.github.com/3e860880bcca6c084d1ae6e36ced0aa9.git",
        "html_url": "https://gist.github.com/3e860880bcca6c084d1ae6e36ced0aa9",
        "files": {

        },
        "public": true,
        "created_at": "2021-08-18T13:26:34Z",
        "updated_at": "2021-08-18T13:26:34Z",
        "description": "Basic intro to TypeScript (From YouTube Crash Course)",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/3e860880bcca6c084d1ae6e36ced0aa9/comments",
        "owner": {
            "login": "AllSafeCybercurity",
            "id": 73909878,
            "node_id": "MDQ6VXNlcjczOTA5ODc4",
            "avatar_url": "https://avatars.githubusercontent.com/u/73909878?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/AllSafeCybercurity",
            "html_url": "https://github.com/AllSafeCybercurity",
            "followers_url": "https://api.github.com/users/AllSafeCybercurity/followers",
            "following_url": "https://api.github.com/users/AllSafeCybercurity/following{/other_user}",
            "gists_url": "https://api.github.com/users/AllSafeCybercurity/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/AllSafeCybercurity/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/AllSafeCybercurity/subscriptions",
            "organizations_url": "https://api.github.com/users/AllSafeCybercurity/orgs",
            "repos_url": "https://api.github.com/users/AllSafeCybercurity/repos",
            "events_url": "https://api.github.com/users/AllSafeCybercurity/events{/privacy}",
            "received_events_url": "https://api.github.com/users/AllSafeCybercurity/received_events",
            "type": "User",
            "site_admin": false
        }
    }
]

test('Renders Description and links it.', () => {
    render(<GistCard {...sampleProps}/>);
    const descriptionText = screen.getByText(/Basic intro to TypeScript/i);
    expect(descriptionText).toBeInTheDocument();
    expect(screen.getByText(sampleProps.gist.description).closest('a')).toHaveAttribute('href', sampleProps.gist.html_url)
});

test('Renders Language tags and option to show forks.', () => {
    render(<GistCard {...sampleProps}/>);
    for (let key in sampleProps.gist.files) {
        let file = sampleProps.gist.files[key];
        let linkElement = screen.getByText(file.language);
        expect(linkElement).toBeInTheDocument();
    }
});

test('Calls function on clicking to show forks.', () => {
    render(<GistCard {...sampleProps}/>);
    const linkElement = screen.getByText('Show forks');
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(sampleProps.getFork).toBeCalled();
});

test('Shows the fork information if data is passed.', () => {
    sampleProps.forks = forks;
    render(<GistCard {...sampleProps}/>);
    const forkElement =screen.getByText(sampleProps.forks[0].owner.login);
    expect(forkElement).toBeInTheDocument();
});


/**
 * Showing description + link, Tags , show forks
 * on clicking show forks call the function
 * and on passing fork as info, shows it on the card
 *
 */