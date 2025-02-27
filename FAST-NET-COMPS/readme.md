
# FAST-NET-COMPS

A **MERN** (MongoDB, Express, React, Node) e-commerce platform for buying and selling phones and laptops. It supports user authentication, blog posts, category management, an admin dashboard, and more.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Project Structure](#project-structure)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Environment Variables](#environment-variables)  
7. [API Routes](#api-routes)  
8. [License](#license)

---

## Features

- **User Authentication (JWT)**  
  Register and log in users with secure JWT tokens.
- **Admin Dashboard**  
  Admin users can manage products (create, update, delete), categories, and blog posts.
- **Product Management**  
  View, search, and filter phones and laptops.
- **Category Management**  
  Create and manage categories for products and blog posts.
- **Blog Posts**  
  Create and edit blog posts (e.g., news or promotional content).
- **User Profiles**  
  View user information and roles.
- **Responsive Design**  
  Mobile-friendly UI for an optimal shopping experience.
- **Search Functionality**  
  Easily find products.
- **Protected Routes**  
  Certain pages and actions are restricted to logged-in users or admins.

---

## Tech Stack

### Frontend
- **React.js** (with Vite)
- **React Router DOM** (for client-side routing)
- **Axios** (for HTTP requests)
- **CSS Modules** (or global CSS)
- **Font Awesome** (icons)

### Backend
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JWT Authentication** (jsonwebtoken)
- **bcrypt** (for password hashing)
- **dotenv** (for environment variables)
- **cors** (for cross-origin resource sharing)

---

## Project Structure

```
FAST-NET-COMPS/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── config/
    ├── server.js
    └── package.json
```

### Notable Folders & Files

- **frontend/src/pages**: Contains page components like `Home.jsx`, `Login.jsx`, `Register.jsx`, `AdminDashboard.jsx`, etc.  
- **frontend/src/components**: Reusable components (e.g., `Navbar.jsx`, `Footer.jsx`, `ProductCard.jsx`).  
- **backend/controllers**: Contains logic for handling requests (e.g., `authController.js`, `productController.js`).  
- **backend/routes**: Express routes connecting endpoints to controllers.  
- **backend/models**: Mongoose schemas/models (`User.js`, `Product.js`, `Category.js`, etc.).  
- **backend/middleware**: Middleware for authentication and authorization (e.g., `authMiddleware.js`).  

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/daniel-ndeto/Group-4-MERN-E-commerce.git
   cd FAST-NET-COMPS
   ```

2. **Install Dependencies (Backend)**
   ```bash
   cd backend
   npm install
   ```
   - This installs all required Node.js packages like `express`, `mongoose`, `jsonwebtoken`, etc.

3. **Install Dependencies (Frontend)**
   ```bash
   cd ../frontend
   npm install
   ```
   - This installs React, React Router DOM, Axios, and other frontend dependencies.

---

## Usage

1. **Set Up Environment Variables**  
   Create a `.env` file in the `backend` folder with the following keys:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
   Adjust values as needed.

2. **Start the Backend Server**
   ```bash
   cd backend
   npm run start
   ```
   Or use `npm run dev` if you have nodemon set up. By default, it listens on port `5000`.

3. **Start the Frontend**
   ```bash
   cd ../frontend
   npm run dev
   ```
   By default, Vite serves the React app on port `5173`.

4. **Open the Application**  
   Visit [http://localhost:5173/](http://localhost:5173/) in your browser to see the frontend. The backend is at [http://localhost:5000/](http://localhost:5000/).

---

## Environment Variables

In your `backend/.env`:

| Variable     | Description                          | Example                       |
|--------------|--------------------------------------|-------------------------------|
| `PORT`       | Port on which the server will run    | `5000`                        |
| `MONGO_URI`  | MongoDB connection string            | `mongodb://localhost:27017/db`|
| `JWT_SECRET` | Secret key for signing JWT tokens    | `supersecretjwtkey123`        |

---

## API Routes

Below is a **brief overview** of the main API endpoints. All routes are prefixed with `/api` if your backend is configured that way (e.g., `http://localhost:5000/api/...`).

### Auth Routes
- **POST** `/auth/register`: Register a new user  
- **POST** `/auth/login`: Log in and get a JWT token  

### Product Routes
- **GET** `/products`: Get all products (public)  
- **GET** `/products/:id`: Get product by ID (public)  
- **POST** `/products`: Create a new product (admin only)  
- **PUT** `/products/:id`: Update product (admin only)  
- **DELETE** `/products/:id`: Delete product (admin only)  

### Category Routes
- **GET** `/categories`: Get all categories (public or admin)  
- **POST** `/categories`: Create a new category (admin only)  

### Blog Routes
- **POST** `/blogs`: Create a new blog post (logged in user)  
- **PUT** `/blogs/:id`: Edit a blog post (author or admin)  

### User Routes
- **GET** `/users/profile`: Get current user’s profile (requires login)

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this software as permitted under the license.

---

### Credits & Acknowledgements

- **React** & **Vite** for the frontend.  
- **Node**, **Express**, **MongoDB**, and **Mongoose** for the backend.  
- **Font Awesome** for icons.  
- Inspiration from the MERN stack community.

---
### admin view 

![image](https://github.com/user-attachments/assets/f373f3b7-4e49-4160-9a91-dcab67024967)

### all products in db

![image](https://github.com/user-attachments/assets/0b2620dd-44b5-47e4-a887-4461d303fbe5)

### editing products

![image](https://github.com/user-attachments/assets/12979a05-a3e2-48ec-9689-9a622089f7bc)

### view of items in cart

![image](https://github.com/user-attachments/assets/cc54134c-3cee-4b83-b870-8561758b757d)

### Create an account and allow to be admin in user name, this account is credited to perform all CRUD operations 

![image](https://github.com/user-attachments/assets/be2ab5f9-0d5e-475b-ae3c-13b9135cfc17)

### single item view 

![image](https://github.com/user-attachments/assets/0cc3a28a-d1d2-4959-a32f-6e11a219f43e)

## Home view 

![image](https://github.com/user-attachments/assets/9d4325e5-eb8e-4006-8d41-bd1e5a86851f)


![image](https://github.com/user-attachments/assets/064d5b92-6107-4ad2-9049-5bd36468859a)


