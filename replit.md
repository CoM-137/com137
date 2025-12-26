# replit.md

## Overview

This is a full-stack TypeScript web application featuring a React frontend with a landing page design. The project includes a contact form that stores messages in a PostgreSQL database. It uses an Express backend with a modern component-based UI built with shadcn/ui components and Framer Motion animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming (light/dark mode support)
- **Animations**: Framer Motion for smooth entry and hover effects
- **Typography**: JetBrains Mono (display) and Merriweather (body) fonts with an academic/intellectual design theme

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts` with Zod schema validation
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Build**: esbuild for server bundling, Vite for client

### Project Structure
```
client/           # React frontend application
  src/
    components/   # React components including shadcn/ui
    pages/        # Page components (Home, not-found)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client setup
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared code between client and server
  schema.ts       # Drizzle database schema
  routes.ts       # API route contracts with Zod validation
```

### API Design
Routes are defined with full type safety using Zod schemas in `shared/routes.ts`. The pattern includes:
- HTTP method and path
- Input validation schema
- Response schemas for different status codes

Current endpoints:
- `POST /api/messages` - Create a contact message

### Database Schema
Single table `messages` with fields:
- `id` (serial primary key)
- `name` (text)
- `email` (text)
- `message` (text)

Use `npm run db:push` to sync schema changes to the database.

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: For type-safe database operations and migrations

### UI Libraries
- **Radix UI**: Headless UI primitives for accessibility
- **shadcn/ui**: Pre-styled component library
- **Framer Motion**: Animation library
- **react-icons**: Icon library for brand and UI icons

### Development Tools
- **Vite**: Frontend dev server and bundler with HMR
- **esbuild**: Fast server-side bundling
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type checking across the full stack

### Required Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)