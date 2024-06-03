import { Octokit, App } from 'octokit';

console.log(`TOKEN: ${process.env.GH_TOKEN}`);

const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
});

octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'harvey1344',
    repo: 'GH-Tests-Fork',
    ref: 'refs/heads/sdksjs',
    sha: '930c25584695568b761e9d19826ef69e5d4fa277',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
    },
});
