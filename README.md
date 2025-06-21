# Authenticator

*Simple and secure user authentication system with React and Node.js.*

[JavaScript Badge] https://img.shields.io/badge/language-JavaScript-yellow?logo=javascript
[NPM Badge] https://img.shields.io/badge/package-npm-blue?logo=npm
[MIT License Badge] https://img.shields.io/badge/license-MIT-green.svg

---

## Table of Contents

- Overview
- Getting Started
  - Prerequisites
  - Installation
- Usage
- Features
- Tech Stack
- License

---

## Overview

Authenticator is a lightweight authentication system built with React on the frontend and Node.js/Express on the backend. It supports secure user registration, login, and session management using JWT tokens.

---

## Features

- User registration with name, email, password, and optional admin flag (demo)  
- Login with JWT token authentication  
- Password hashing and validation  
- Persistent login with token stored in localStorage  
- Protected routes with React context and hooks  
- Password visibility toggle on the frontend  
- Error handling and loading states  

---

## Tech Stack

React (https://reactjs.org/)  
Node.js (https://nodejs.org/)  
Express.js (https://expressjs.com/)  
JWT (https://jwt.io/)  
MySQL (https://www.mysql.com/)  
TypeScript (https://www.typescriptlang.org/)  

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer)  
- npm or yarn  
- MySQL database setup  

### Installation

1. Clone the repo  
   git clone https://github.com/YourUsername/authenticator.git  
   cd authenticator  
2. Install dependencies  
   npm install  
3. Create a .env file in the root and add the following environment variables:  

PORT=5000  
DATABASE_URL=mysql://user:password@localhost:3306/dbname  
JWT_SECRET=your_jwt_secret  
JWT_EXPIRE=1d  

4. Run the backend server  
   npm run dev  
5. Run the frontend app (in a separate terminal)  
   cd client  
   npm start  

---

## Usage

- Register a new user at /register  
- Login at /login  
- Access protected dashboard at /dashboard once authenticated  

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
