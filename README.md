# 🌐 **Sociopedia** 🎉  

Welcome to **Sociopedia** — a vibrant social platform where users can 🌟 connect, 📝 share, and 🤝 engage in a dynamic, interactive environment! This full-stack web application is built using the **MERN stack** (MongoDB, Express.js, React, and Node.js) with ⚡ **Vite** for fast development.  

> **📌 Note**: This project was developed as part of my journey to learn and enhance my skills in MERN stack development. Through this experience, I gained valuable hands-on practice with various technologies and tools, which I’ve detailed below.  

---

## 🚀 **Project Features**  

- **🔐 User Authentication**:  
  - Register and log in with secure password handling using JWT.  

- **📝 Create and Share Posts**:  
  - Add text-based posts with optional images.  
  - 👍 Like and 💬 comment on posts to interact with others.  

- **👤 User Profiles**:  
  - View and edit your profile information.  
  - Browse other users' profiles and see their activities.  

- **📱 Responsive Design**:  
  - A user-friendly interface optimized for devices of all sizes.  

---

## 🔧 **Technologies Used**  

### **Frontend**:  
- **⚛️ React**: Building dynamic and interactive UI.  
- **⚡ Vite**: Fast bundling and development.  
- **🎨 Material-UI**: Stylish and reusable UI components.  

### **Backend**:  
- **🌐 Node.js**: JavaScript runtime for building server-side applications.  
- **🚀 Express.js**: Backend framework for API routing.  
- **🛢️ MongoDB**: NoSQL database for efficient data storage.  

### **Others**:  
- **🔒 JWT**: Secure authentication and session management.  
- **📚 Mongoose**: Object Data Modeling (ODM) for MongoDB.  
- **☁️ Cloudinary**: Image storage and handling.  

---

## 📖 **Learning Objectives**  

The primary goal of this project was to gain hands-on experience with the **MERN stack** and modern web development practices. Key takeaways:  
1. 🛠️ Building a full-stack application with CRUD functionality.  
2. 🔑 Implementing authentication using JWT.  
3. 🗄️ Using Mongoose for schema definition and database operations.  
4. 📸 Optimizing image uploads with Cloudinary.  
5. 📱 Creating a responsive and interactive user experience.  

---

## 🔗 **API Endpoints**  

Here are the key API endpoints for **Sociopedia**:  

### **🔐 Authentication**  
- `POST /auth/register`: 🆕 Register a new user.  
- `POST /auth/login`: 🔑 Authenticate user and return a JWT.  

### **👤 User Management**  
- `GET /users/:id`: 👀 Retrieve user profile information by ID.  
- `PATCH /users/:id`: ✏️ Update user profile information.  

### **📝 Posts**  
- `GET /posts`: 📄 Fetch all posts.  
- `POST /posts`: ➕ Create a new post (text and optional image).  
- `PATCH /posts/:id/like`: 👍 Like or unlike a post.  

### **💬 Comments**  
- `GET /posts/:id/comments`: 🗨️ Fetch comments for a post.  
- `POST /posts/:id/comments`: ➕ Add a comment to a post.  

---


