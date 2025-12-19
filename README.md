# Multi-Tenant Issue Management API

Backend API built using NestJS to manage issues across multiple organizations with strict data isolation.

## Tech Stack
- Node.js
- NestJS
- TypeScript
- Prisma ORM
- MongoDB

## Features
- Multi-tenant data isolation using organizationId
- Role-based authorization (ADMIN / MEMBER)
- Issue CRUD APIs
- Backend enforcement without authentication

## Setup Instructions

```bash
npm install
npx prisma migrate dev --name init
npm run start
