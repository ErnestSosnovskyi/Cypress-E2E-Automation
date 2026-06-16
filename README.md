# Telnyx Cypress E2E Automation

This repository contains automated End-to-End (E2E) tests for [telnyx.com](https://telnyx.com), built with Cypress. The framework implements the Page Object Model (POM) design pattern, uses fixtures for test data management, and is integrated with GitHub Actions for CI/CD reporting.

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (Node Package Manager)

## Installation
Clone the repository and install the required dependencies:

```bash
npm install
```

# Running Tests

I have configured custom scripts in `package.json` for easier execution:

1. Open Cypress Test Runner (Interactive UI Mode):

```bash
npm run cypress:open
```

2. Run tests in Headless Mode:

```bash
npm run test:e2e
```

3. Run tests and send the report to Cypress Cloud Dashboard:

```bash
npm run test:dashboard
```

*(Note: You must have the `CYPRESS_RECORD_KEY` configured in your environment or GitHub Secrets to record the dashboard results).*

# Project Structure

```bash
telnyx-cypress-test/
├── .github/
│   └── workflows/
│       └── cypress.yml              # CI/CD pipeline configuration for GitHub Actions
├── cypress/
│   ├── e2e/                         # E2E test files (e.g., telnyx.cy.js)
│   ├── fixtures/                    # Test data files (e.g., test_data.json)
│   ├── pageObjects/                 # Page Object Model classes
│   └── support/                     # Custom commands and global configuration
├── node_modules/                    # Project dependencies (ignored in git)
├── .gitignore                       # Git ignore rules
├── cypress.config.js                # Default Cypress configuration
├── cypress.telnyx.config.js         # Custom Cypress configuration for the project
├── package-lock.json                # Exact versions of npm dependencies
├── package.json                     # Project metadata and npm scripts
└── README.md                        # Project documentation
```