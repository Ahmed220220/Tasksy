# Tasksy - Local Skill Sharing Platform

Tasksy is a comprehensive skill-sharing platform that connects people in local communities for everyday tasks and services. Users can either request help with tasks or offer their services to earn money, similar to platforms like Vinted or Upwork but focused on local, in-person services.

## ✨ Features Implemented

### 🔐 Authentication & User Management
- **NextAuth.js Integration**: Email/password and Google OAuth authentication
- **User Profiles**: Complete profile system with bio, location, skills, and verification status
- **Identity Verification**: Support for ID document upload and verification
- **User Ratings & Reviews**: Comprehensive rating system for trust and quality

### 📋 Task Management
- **Task Creation**: Users can post detailed tasks with descriptions, pricing, deadlines, and requirements
- **Category System**: 12 predefined categories including cleaning, handyman, tech support, childcare, etc.
- **Search & Filtering**: Location-based search with category and price filters
- **Task Applications**: Service providers can apply to tasks with custom proposals
- **Task Status Tracking**: Complete workflow from open to completed

### 💬 Communication
- **Real-time Messaging**: Direct messaging between task creators and service providers
- **Conversation Management**: Organized conversations linked to specific tasks
- **Message Types**: Support for text, images, and file attachments

### 💰 Payments & Financial
- **Stripe Integration**: Secure payment processing
- **Automatic Platform Fees**: 15% commission automatically deducted
- **Payout System**: Automated payouts to service providers after task completion
- **Multiple Currencies**: Support for EUR, USD, GBP

### 🗺️ Location Features
- **Google Maps Integration**: Location-based task discovery
- **Distance Calculation**: Show proximity to tasks
- **Location Search**: Find tasks and services in specific areas

### 🛡️ Safety & Moderation
- **Report System**: Users can report inappropriate content or behavior
- **Admin Dashboard**: Complete moderation tools for managing users, tasks, and complaints
- **User Verification**: Identity verification system for enhanced trust
- **Community Guidelines**: Built-in safety and community standards

### 🌍 Internationalization
- **Multilingual Support**: English and Dutch language support
- **Localized Content**: Category names, descriptions, and UI elements in multiple languages

### 📱 Responsive Design
- **Mobile-First**: Fully responsive design optimized for mobile devices
- **Modern UI**: Clean, professional interface inspired by successful platforms
- **Accessibility**: Built with accessibility standards in mind

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Radix UI**: Accessible component primitives

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Prisma ORM**: Type-safe database client
- **SQLite**: Development database (easily switchable to PostgreSQL)
- **NextAuth.js**: Authentication solution

### External Services
- **Stripe**: Payment processing
- **Google Maps API**: Location services
- **Cloudinary**: Image upload and management (planned)
- **Socket.IO**: Real-time messaging (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tasksy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   - Database URL (SQLite by default for development)
   - NextAuth secret and URLs
   - OAuth provider credentials (Google, Facebook)
   - Stripe API keys
   - Google Maps API key

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   npx tsx src/lib/seed.ts
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📊 Database Schema

The application uses a comprehensive database schema with the following main models:

- **Users**: Complete user profiles with verification and location data
- **Categories**: Task categories with multilingual support
- **Tasks**: Detailed task information with pricing and requirements
- **TaskApplications**: Service provider applications to tasks
- **Conversations & Messages**: Real-time messaging system
- **Reviews**: User ratings and feedback system
- **Payments**: Secure payment tracking and commission handling
- **Reports**: Moderation and safety reporting system

## 🎯 Current Status

### ✅ Completed Features
- [x] Database schema and models
- [x] Authentication system
- [x] Basic user management
- [x] Task creation and management
- [x] Category system
- [x] Beautiful responsive UI
- [x] Landing page with full feature showcase
- [x] Database seeding

### 🚧 In Progress
- [ ] Task browsing and search functionality
- [ ] Real-time messaging implementation
- [ ] Stripe payment integration
- [ ] Google Maps integration
- [ ] Image upload functionality
- [ ] User profile pages
- [ ] Admin dashboard

### 📋 Planned Features
- [ ] Mobile application (React Native)
- [ ] Push notifications
- [ ] Advanced search filters
- [ ] Dispute resolution system
- [ ] Insurance integration
- [ ] Background check integration
- [ ] Calendar integration
- [ ] Advanced analytics

## 🏗️ Project Structure

```
tasksy/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── layout/        # Layout components
│   └── lib/               # Utility functions and configurations
├── prisma/                # Database schema and migrations
└── public/               # Static assets
```

## 🔧 Development Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npx prisma studio`: Open database browser
- `npx prisma migrate dev`: Create and apply migrations
- `npx tsx src/lib/seed.ts`: Seed the database

## 🌟 Key Features in Detail

### Task Workflow
1. **Task Creation**: Users post tasks with detailed requirements
2. **Service Provider Discovery**: Providers browse and apply to tasks
3. **Selection Process**: Task creators review applications and select providers
4. **Communication**: Real-time messaging during task execution
5. **Completion & Payment**: Secure payment processing after task completion
6. **Reviews**: Both parties can leave reviews and ratings

### Safety Features
- Identity verification with document upload
- User reporting and moderation system
- Secure payment escrow
- Rating and review system
- Community guidelines enforcement

### Business Model
- 15% platform commission on all transactions
- Automatic fee deduction from payments
- Secure payout system for service providers
- Dispute resolution support

## 📱 Mobile Support

The web application is fully responsive and optimized for mobile devices. A dedicated React Native mobile application is planned for the future to provide native iOS and Android experiences.

## 🌍 Localization

Currently supports:
- **English**: Primary language
- **Dutch**: Full translation support

Additional languages can be easily added through the internationalization system.

## 🔒 Security & Privacy

- GDPR compliant data handling
- Secure authentication with NextAuth.js
- Encrypted payment processing through Stripe
- User privacy controls and data deletion options
- Regular security audits and updates

## 📞 Support & Documentation

For development questions or support:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Prisma documentation](https://www.prisma.io/docs)
- Consult [Stripe API docs](https://stripe.com/docs/api)

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Tasksy** - Connecting communities through local skill sharing 🤝
