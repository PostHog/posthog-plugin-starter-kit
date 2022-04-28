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

If you're looking for inspiration, here are a few exemplary plugins:

1. [Hello World](https://github.com/PostHog/helloworldplugin) – basic event processing, with tests
1. [S3 Export](https://github.com/PostHog/s3-export-plugin) – event export using the AWS SDK, with TypeScript
1. [GeoIP](https://github.com/PostHog/posthog-plugin-geoip) – advanced event processing using the GeoIP feature, with tests, formatting, linting, TypeScript, and GitHub Actions CI
1. [PagerDuty](https://github.com/PostHog/posthog-pagerduty-plugin) – periodic job using external HTTP API access

To get up to speed with the environment of plugins, check out [our Plugins overview in PostHog Docs](https://posthog.com/docs/plugins/build/overview).  
For a crash course, read [the Plugins tutorial in PostHog Docs](https://posthog.com/docs/plugins/build/tutorial).

## Installation

1. Open PostHog.
1. Go to the Plugins page from the sidebar.
1. Head to the Advanced tab.
1. "Install from GitHub, GitLab or npm" using this repository's URL.

## Submitting your plugin to PostHog

When you're done, you can submit your plugin to our integration library so that it can be used by other users, including those on PostHog Cloud. 

To submit your plugin, [email your plugin GitHub URL to hey@posthog.com](mailto:hey@posthog.com?subject=Submit%20Plugin%20to%20Repository&body=Plugin%20GitHub%20link%3A)

Once we get your email, we'll review the plugin to ensure it's secure, performant, and adheres to best practices. Then, we add it to our official repository and make it available for everyone to use!

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)

We're here to help you with anything PostHog!
