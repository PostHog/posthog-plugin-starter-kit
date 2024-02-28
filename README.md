# PostHog Plugin Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)

This is a PostHog plugin template.

The existing sample code adds property `"greeting"` to every event with a configurable value (default: `"Hello world!"`).  
But that is just to help you get started! To make it your own:
- [ ] Add your code to `index.js`.
- [ ] Add your metadata and configuration schema to `plugin.json`.
- [ ] Search for `<TODO:`, make sure none are left!
- [ ] Optional: Add a `logo.png` file to give this plugin its own logo.
- [ ] Create a README.MD for your plugin which follows [our documentation guidelines](https://posthog.com/docs/plugins/build). 

If you're looking for inspiration, then check out [url normalizer transformation](https://github.com/PostHog/posthog-url-normalizer-plugin) or [compose webhook destination](https://github.com/PostHog/webhook-plugin)

To get up to speed with the environment of plugins, check out [our Plugins overview in PostHog Docs](https://posthog.com/docs/plugins/build/overview).

## Installation

1. Open PostHog.
1. Go to the Plugins page from the sidebar.
1. Head to the Advanced tab.
1. "Install from GitHub, GitLab or npm" using this repository's URL.

## Submitting your plugin to PostHog

When you're done, you can submit your plugin to our integration library so that it can be used by other users, including those on PostHog Cloud. 

To submit your plugin, use the support option in PostHog Cloud.

We'll review the plugin to ensure it's secure, performant, adheres to best practices and isn't already doing something that can be accomplished by other means. Then we'll add it to our official repository and make it available for everyone to use!
