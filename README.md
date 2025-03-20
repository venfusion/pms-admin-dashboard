# Frontend Service Template

A modern React application template with a comprehensive set of tools and configurations for building scalable frontend applications.

## Features

- 🚀 **React 18** with TypeScript
- 📦 **Vite** for fast development and building
- 🎨 **Material-UI (MUI) v6** for beautiful, responsive UI components
- 🔄 **TanStack Query v5** for efficient server state management
- 📝 **React Hook Form** with Zod validation
- 🏪 **Zustand** for client state management
- 📅 **Day.js** for date manipulation
- 🌐 **Ky** for HTTP requests
- 🛡️ **React Error Boundary** for graceful error handling
- 🎭 **React Helmet** for document head management
- ✨ **Prettier** and **ESLint** for code formatting and linting
- 🐶 **Husky** for Git hooks
- 📝 **Commitlint** for consistent commit messages
- 🧪 **Vitest** for testing

## Getting Started

1. Click the "Use this template" button on GitHub
2. Create a new repository from this template
3. Clone your new repository:
   ```bash
   git clone your-repo-url
   cd your-repo-name
   ```
4. Install dependencies:
   ```bash
   yarn
   ```
5. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```
6. Start the development server:
   ```bash
   yarn dev
   ```

## Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production (TypeScript build + Vite build)
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn test` - Run tests with Vitest
- `yarn prepare` - Install Husky hooks

## Project Structure

```
template-frontend/
├── src/                    # Source code
│   ├── assets/             # Static assets
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite type declarations
├── public/                 # Public static files
├── .husky/                 # Git hooks
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint configuration
├── .prettierrc             # Prettier configuration
└── commitlint.config.ts    # Commit message configuration
```

## Development Guidelines

### Code Style and Quality

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write unit tests for components and utilities
- Use React Hook Form with Zod for form validation
- Implement error boundaries for error handling
- Follow the commit message convention (commitlint)

### State Management

- Use Zustand for global client state
- Use TanStack Query for server state
- Keep component state local when possible
- Implement proper data fetching patterns

### Component Development

- Use MUI components and theming system
- Keep components small and focused
- Implement proper prop types
- Use React Error Boundary for error handling
- Follow React best practices and hooks rules

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=your_api_url
```

## Troubleshooting

### Common Issues

1. **Build Failures**

   - Clear `node_modules` and run `yarn` again
   - Ensure all dependencies are compatible

2. **Development Server Issues**

   - Check for port conflicts
   - Verify environment variables
   - Clear browser cache and local storage

## Contributing

1. Follow the established code style
2. Write clear commit messages following commitlint rules
3. Add tests for new features
4. Update documentation as needed
