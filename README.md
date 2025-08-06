# Juoze E-Commerce Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)

A high-performance e-commerce platform for fresh health products featuring modern architecture, robust payment processing, and enterprise-grade security. Built with performance optimization and scalability as first-class citizens.

![Dashboard Preview](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=Fresh+Health+Dashboard+Showcase)

## 🚀 Technical Highlights

- **Modern Frontend Stack**: Vite + React 18, TypeScript, Shadcn UI
- **Secure Authentication**: JWT implementation with refresh token rotation
- **Payment Processing**: Stripe/Razorpay integration with webhook verification
- **State Management**: Redux Toolkit with RTK Query optimization
- **Performance**: 95+ Lighthouse score via code-splitting and lazy loading
- **RESTful API**: Node.js/Express backend with MongoDB (Mongoose ODM)
- **CI/CD**: Automated deployments on Vercel/Netlify with AWS backend
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🧠 Architecture Overview

```mermaid
graph TD
    A[React Frontend] -->|API Calls| B[Node.js/Express]
    B --> C[MongoDB Atlas]
    A -->|Payment Requests| D[Stripe/Razorpay]
    B --> D
    C --> E[Redis Caching]
    D --> F[Webhook Handlers]
    G[Admin Dashboard] --> B
    H[Mobile App] --> B
    style A fill:#61dafb,stroke:#333
    style B fill:#68a063,stroke:#333
    style C fill:#47a248,stroke:#333

