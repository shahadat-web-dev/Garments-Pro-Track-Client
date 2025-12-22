# 👕 Garments Order & Production Tracker System

A full-stack web application designed to help small and medium-sized garment factories manage product listings, orders, production workflow, and delivery tracking efficiently.

---

## 📌 Project Purpose

The **Garments Order & Production Tracker System** simplifies order management for garment businesses by providing role-based dashboards for **Admin**, **Manager**, and **Buyer**.  
It ensures smooth production tracking, secure authentication, proper inventory handling, and real-time order status updates.

This project was developed as part of **Assignment – 11** to demonstrate full-stack development skills, clean UI/UX design, and real-world business logic implementation.

---

## 🌐 Live Website

🔗 **Live Site:** https://garments-pro-track-client.vercel.app/

---

## 🔐 Admin & Demo Credentials

**Admin**
- Email: admin@email.com  
- Password: admin123  

**Manager**
- Email: manager@email.com  
- Password: manager123  

---

## 🧩 Key Features

### 🔑 Authentication & Authorization
- Email & Password Authentication (Firebase)
- Google Login (Buyer role, pending status)
- JWT-based private route protection (token stored in cookies)
- Role-based access control (Admin / Manager / Buyer)
- Suspended users restriction with feedback display

---

### 🏠 Public Pages
- Home Page with Framer Motion animations
- Product Showcase (MongoDB data)
- Product Details Page
- About Us & Contact Pages
- Responsive Navbar & Footer
- 404 Not Found Page

---

### 🛍️ Buyer Features
- View all products
- Product booking with quantity validation
- Order tracking timeline
- Cancel pending orders
- View suspend feedback (if suspended)
- Profile management

---

### 🧑‍💼 Manager Features
- Add new products
- Manage own products
- Approve / Reject pending orders
- Add production tracking updates
- View approved orders
- Profile & suspend feedback view

---

### 🛠️ Admin Features
- Manage users (approve / suspend with reason)
- Manage all products
- Control homepage featured products
- View all orders with filter & search
- Analytics Dashboard (optional)
- Role update system

---

## 📊 Dashboard Functionalities
- Fully responsive dashboard layout
- Charts & statistics visualization
- Search, filter & pagination
- Reusable components & modals
- Dynamic page titles
- Light/Dark theme toggle

---

## 🧪 Validation & UX Enhancements
- React Hook Form validation
- Password strength enforcement
- Loading spinners during API calls
- SweetAlert / Toast notifications
- Route reload protection
- Firebase domain authorization

---

## 🧰 Technology Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Hook Form
- Axios
- SweetAlert2 / React Toastify
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- Cookie Parser
- CORS
- Dotenv

---

## 🔐 Security
- Firebase configuration secured using environment variables
- MongoDB credentials secured using environment variables
- JWT stored in HTTP-only cookies
- Protected private routes

---

## 📁 Project Repositories

🔗 **Client Repository:** https://github.com/your-username/garments-tracker-client  
🔗 **Server Repository:** https://github.com/your-username/garments-tracker-server  

---

## 🛠️ Installation & Setup

### Client Side
```bash
git clone https://github.com/your-username/garments-tracker-client.git
cd garments-tracker-client
npm install
npm run dev
