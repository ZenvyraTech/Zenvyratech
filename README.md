# ZENVYRA TECH - MERN Stack Website

A professional, animated multi-page website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS.

## 🚀 Features

- **Dark-mode futuristic design** with Electric Cyan accent color
- **Smooth animations** with Framer Motion
- **Custom cursor** and scroll progress indicator
- **Fully responsive** design
- **SEO optimized** with React Helmet
- **Contact form** with validation
- **Admin CMS** for managing blogs and projects
- **RESTful API** with JWT authentication

## 📁 Project Structure

```
ZenvryaTech/
├── backend/              # Primary Express.js API server (recommended)
│   ├── controllers/      # Request handlers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth & upload middleware
│   └── server.js        # Server entry point
│
├── server/               # Alternative API server (deprecated)
│   ├── controllers/      # Request handlers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Server entry point
│
├── frontend/            # Primary React + Vite application (recommended)
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── App.jsx      # Main app component
│   │   └── main.jsx     # Entry point
│   └── index.html
│
└── client/              # Alternative React + Vite implementation (deprecated)
    ├── src/
    │   ├── components/  # Reusable components
    │   ├── pages/       # Page components
    │   ├── App.jsx      # Main app component
    │   └── main.jsx     # Entry point
    └── index.html
```

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Hook Form
- React Helmet Async
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt
- Multer (file uploads)
- CORS

## 📦 Installation

> **Note:** This project contains multiple implementations. Use the `backend` and `frontend` directories as the primary implementations. The `server` and `client` directories are deprecated alternatives.

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zenvyra-tech
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

The API server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🔐 Admin Setup

To create an admin user, make a POST request to:

```bash
POST http://localhost:5000/api/admin/register
Content-Type: application/json

{
  "username": "admin",
  "email": "admin@zenvyra.com",
  "password": "securepassword123"
}
```

Or use curl:

```bash
curl -X POST http://localhost:5000/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@zenvyra.com","password":"securepassword123"}'
```

## 📚 API Endpoints

### Public Endpoints
- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:slug` - Get single blog by slug
- `GET /api/projects` - Get all projects
- `GET /api/projects/:slug` - Get single project
- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin login

### Protected Endpoints (Require JWT Token)
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `GET /api/contact` - Get all inquiries
- `PUT /api/contact/:id` - Update inquiry status

## 🎨 Design Specifications

### Color Palette
- **Deep Charcoal Black:** `#0B0D10`
- **Graphite Grey:** `#151820`
- **Steel Grey:** `#2A2F3A`
- **Soft White:** `#E6EAF0`
- **Muted Grey:** `#9AA3B2`
- **Accent Cyan:** `#3CF2FF`

### Typography
- **Font:** Inter / Space Grotesk
- **Heading Weight:** Semi-Bold
- **Body Weight:** Regular

## 🌐 Pages

- **Home** - Hero, Services, Process, Founder preview
- **About** - Brand philosophy, Founder information
- **Services** - All services with details
- **SEO Services** - Dedicated SEO page
- **Projects** - Portfolio showcase
- **Blog** - Blog listing and individual posts
- **Contact** - Contact form
- **Legal** - Privacy Policy & Terms

## 📝 Available Scripts

### Backend
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚀 Deployment

### Backend Deployment (Heroku/Render/Railway)
1. Set environment variables
2. Push to repository
3. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 📄 License

© 2026 Zenvyra Solutions. All rights reserved.

## 👤 Author

**Abhishek**  
Founder & Digital Engineer  
Zenvyra Tech

---

For support or inquiries, visit [Contact Page](#)
