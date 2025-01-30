This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Environment Variables

To set up your environment variables:

1. Rename the `.env.example` file to `.env`
2. Update the variables in the `.env` file with your own values

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the development server using Turbopack.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### `npm run build`

Builds the application for production usage.

### `npm run start`

Starts a production server with the built application.

### `npm run lint`

Runs ESLint to check for code quality and style issues.

### `npm run test`

Executes Jest tests for the application.

### `npm run generate:types`

Generates TypeScript types from GraphQL schema using GraphQL Code Generator.

## Folder structure

Each directory serves a specific purpose:

- `assets/`: Contains static files like fonts and images
- `components/`: Houses reusable UI components, each in its own directory with tests
- `features/`: Contains feature-based modules (like the lease calculator) with their components, types, and logic
- `pages/`: Next.js pages and routing
- `services/`: API-related code, GraphQL queries, and external service integrations
- `types/`: Global TypeScript type definitions and generated GraphQL types

The project follows a feature-based architecture where related code is grouped by business domain (like the lease calculator) rather than technical concerns. This makes it easier to maintain and scale the application as new features are added.
