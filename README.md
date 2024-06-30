# HTM Project

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Available Scripts](#available-scripts)
5. [Development](#development)
6. [Testing](#testing)
7. [Storybook](#storybook)
8. [Deployment](#deployment)
9. [Project Structure](#project-structure)
10. [Technologies Used](#technologies-used)
11. [Contributing](#contributing)
12. [Versioning](#versioning)
13. [License](#license)

## Introduction

HTM is a Next.js-based project that utilizes various modern web development tools and libraries. This README provides a comprehensive guide to set up, develop, and maintain the project.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js) or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/nabinstha1234/htm-niseko
cd htm-niseko

```

2. Install dependencies:
```bash
npm install

```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Lints the codebase
- `npm run format`: Formats the codebase
- `npm test`: Runs the test suite
- `npm run storybook`: Starts Storybook for component development
- `npm run prepare`: Sets up Husky for git hooks

For a full list of available scripts, refer to the `scripts` section in `package.json`.

## Development

To start the development server:
```bash
npm run dev

```
This will start the Next.js development server, along with the Spotlight sidecar for enhanced development features.

## Testing

The project uses Vitest for unit testing and Playwright for end-to-end testing.

- Run unit tests: `npm test`
- Run e2e tests: `npm run test:e2e`

## Storybook

Storybook is set up for component development and testing:

- Start Storybook: `npm run storybook`
- Build Storybook: `npm run storybook:build`

## Deployment

1. Build the project:
```bash
npm start

```
The project is set up with Sentry for error tracking in production.

## Project Structure

The project follows a typical Next.js structure. Key directories and files include:

- `/pages`: Next.js pages
- `/components`: React components
- `/styles`: Global styles and Tailwind CSS configuration
- `/public`: Static assets
- `/tests`: Test files

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Clerk for authentication
- Framer Motion for animations
- React Hook Form for form handling
- Zod for schema validation
- Storybook for component development
- Vitest and Playwright for testing
- ESLint and Prettier for code quality
- Husky and lint-staged for pre-commit hooks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes using Commitizen (`npm run commit`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/yourusername/htm/tags).

## License












