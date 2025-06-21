# Authenticator

*Simple and secure user authentication system with React and Node.js.*

[![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![NPM](https://img.shields.io/badge/package-npm-blue?logo=npm)](https://www.npmjs.com/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## Overview

**Authenticator** is a lightweight authentication system built with React on the frontend and Node.js/Express on the backend. It supports secure user registration, login, and session management using JWT tokens.

---

## Features

- ✅ User registration with name, email, password, and optional admin flag (demo)  
- ✅ Login with JWT token authentication  
- ✅ Password hashing and validation  
- ✅ Persistent login with token stored in localStorage  
- ✅ Protected routes with React context and hooks  
- ✅ Password visibility toggle on the frontend  
- ✅ Error handling and loading states  

---

## Tech Stack

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)  
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express.js-black?logo=express&logoColor=white)](https://expressjs.com/)  
[![JWT](https://img.shields.io/badge/JWT-black?logo=json-web-tokens&logoColor=white)](https://jwt.io/)  
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer)  
- npm or yarn  
- MySQL database setup  

### Installation

1. Clone the repo  
```bash
git clone https://github.com/YourUsername/authenticator.git
cd authenticator
Install dependencies

bash
Copy
Edit
npm install
Create a .env file in the root and add the following environment variables:

ini
Copy
Edit
PORT=5000
DATABASE_URL=mysql://user:password@localhost:3306/dbname
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1d
Run the backend server

bash
Copy
Edit
npm run dev
Run the frontend app (in a separate terminal)

bash
Copy
Edit
cd client
npm start
Usage
Register a new user at /register

Login at /login

Access protected dashboard at /dashboard once authenticated

License
This project is licensed under the MIT License. See the LICENSE file for details.
