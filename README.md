# Hello World – a PostHog Plugin

[![npm package](https://img.shields.io/npm/v/posthog-plugin-hello-world?style=flat-square)](https://www.npmjs.com/package/posthog-plugin-hello-world)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)

This is an exemplary PostHog plugin. It adds property `"greeting"` to every event with a configurable value – `"Hello world!"` by default.

A few goodies included with this plugin:
-   TypeScript for best reliability and development experience,
-   Jest for convenient testing,
-   Prettier and ESLint for code style and best practices – both handled by pre-commit hooks,
-   GitHub Actions set up to run code quality and functionality tests in pull requests, and also to publish a new npm release when the package version is incremented in `main` (the latter requires an automation type npm access token to be set with a repo secret `NPM_TOKEN`).

## Questions?

### [Join our Slack community.](https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ)

We're here to help you with anything PostHog!
