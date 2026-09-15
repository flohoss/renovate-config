module.exports = {
    platform: 'github',
    token: process.env.RENOVATE_TOKEN,
    repositories: ['flohoss/docker-compose', 'flohoss/stacks'],
    onboarding: false,
    requireConfig: 'optional',
    dependencyDashboard: true,
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
};
