module.exports = {
    platform: 'github',
    token: process.env.RENOVATE_TOKEN,
    gitAuthor: `${process.env.RENOVATE_AUTHOR} <${process.env.RENOVATE_PRIVATE_EMAIL}>`,
    username: process.env.RENOVATE_USERNAME,
    repositories: ['flohoss/docker-compose', 'flohoss/stacks'],
    onboarding: false,
    requireConfig: 'optional',
    hostRules: [
        {
            matchHost: 'docker.io',
            username: process.env.RENOVATE_DOCKER_HUB_USERNAME,
            password: process.env.RENOVATE_DOCKER_HUB_PASSWORD,
        },
        {
            matchHost: 'ghcr.io',
            username: process.env.RENOVATE_GHCR_USERNAME,
            password: process.env.RENOVATE_GHCR_TOKEN,
        }
    ],
    allowedCommands: ['^curl -s -X POST "' + process.env.RENOVATE_NTFY_URL + '" .*'],
    postUpgradeTasks: {
        commands: [
            `curl -s -X POST "${process.env.RENOVATE_NTFY_URL}" -H "Authorization: Bearer ${process.env.RENOVATE_NTFY_TOKEN}" -H "X-Tags: twisted_rightwards_arrows" -H "X-Title: Renovate - {{{depName}}}" -d "{{{prTitle}}}"`
        ],
        executionMode: 'branch'
    }
};
