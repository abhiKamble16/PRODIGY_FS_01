# 🔐 Secure User Authentication System

A full-stack user authentication system developed using the MERN stack as part of my **Prodigy Infotech Full Stack Web Development Internship – Task 01**.

## 📌 Task Description

Implement a user authentication system with secure login and registration functionality.

Users should be able to:

- Create an account
- Login securely
- Access protected routes after authentication
- Logout securely

The application uses password hashing, JWT authentication, protected routes, and MongoDB for storing user information.

---

## 🚀 Features

- User Registration
- User Login
- Secure Password Hashing
- JWT Authentication
- Protected Dashboard
- User Profile Information
- Logout Functionality
- Form Validation
- Authentication Error Handling
- Responsive User Interface
- MongoDB Database Integration

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- Axios
- React Router
- CSS

### Backend

- Node.js
- Express.js
- JWT
- bcryptjs

### Database

- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
PRODIGY_FS_01/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   └── ProtectedRoute.jsx
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   └── Dashboard.jsx
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── server/
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```
