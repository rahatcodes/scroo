# Scroo - Screen Recording & Video Sharing Platform

A modern, full-stack web application for screen recording, video upload, and sharing built with Next.js 15 and React 19.

## Features

### 🎥 Screen Recording
- Built-in browser-based screen recording
- Audio mixing (system audio + microphone)
- Real-time recording controls and duration tracking
- High-quality video capture

### 📤 Video Management
- Drag & drop video uploads
- Video processing with status tracking
- Thumbnail upload support
- Public/private visibility settings
- View count analytics

### 🔐 Authentication & Security
- Google OAuth integration via Better Auth
- Session management with secure cookies
- Rate limiting and bot protection via Arcjet
- Protected routes and API endpoints

### 🎮 Video Features
- Custom video player with iframe embedding
- WebVTT transcription support
- Search and filtering capabilities
- Pagination for video listings
- Responsive video streaming via Bunny CDN

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Modern icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Better Auth** - Authentication with Google OAuth
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Primary database via Xata

### External Services
- **Xata** - Cloud PostgreSQL database platform
- **Bunny CDN** - Video streaming and storage
- **Arcjet** - Security, rate limiting, and bot protection
- **Google OAuth** - Social authentication

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google OAuth credentials
- Xata database
- Bunny CDN account
- Arcjet API key

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   │   ├── sign-in/       # Sign in page
│   │   └── sign-up/       # Sign up page
│   ├── (root)/            # Main application
│   │   ├── dashboard/     # User dashboard
│   │   ├── record/        # Screen recording page
│   │   ├── upload/        # Video upload page
│   │   └── video/         # Video player pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── videos/        # Video management endpoints
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── middleware.ts      # Route protection
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── record/           # Recording components
│   └── upload/           # Upload components
├── lib/                  # Utilities and configurations
│   ├── hooks/            # Custom React hooks
│   ├── auth.ts           # Better Auth configuration
│   ├── db.ts             # Database connection
│   └── utils.ts          # Utility functions
├── drizzle/              # Database schema and migrations
│   ├── schema.ts         # Database schema
│   └── migrations/       # Migration files
└── constants/            # Application constants
```
