# Portfolio Website

A modern, responsive personal portfolio website built with **React** and **Node.js**, designed to showcase skills, projects, and professional experience.

## 🚀 Features

- **Modern UI/UX**: Built with React and Tailwind CSS for a sleek, responsive design.
- **Animations**: Smooth transitions and effects using Framer Motion.
- **Dark/Light Mode**: Fully supported theme toggling.
- **Contact Form**: Functional contact form powered by a Node.js/Express backend and Nodemailer.
- **Sections**: Hero, About Me, Skills, Projects, Certifications, Contact.

## 🛠️ Tech Stack

### Frontend
- **React**: UI Library
- **Vite**: Build Tool
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **React Icons**: Iconography

### Backend
- **Node.js**: Runtime Environment
- **Express**: Web Framework
- **Nodemailer**: Email sending service

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   # Backend Port
   PORT=5000
   
   # Email Configuration (for Contact Form)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

4. **Run the Application**
   You can run both frontend and backend concurrently (if configured) or in separate terminals.

   **Frontend:**
   ```bash
   npm run dev
   ```

   **Backend:**
   ```bash
   npm run server
   ```

## 🌍 Deployment

### Backend (Render)
Hosted on [Render](https://render.com) as a Web Service.
- **Build Command**: `npm install`
- **Start Command**: `npm run server`
- **Env Vars**: `EMAIL_USER`, `EMAIL_PASS`

### Frontend (Vercel)
Hosted on [Vercel](https://vercel.com).
- **Framework Preset**: Vite
- **Env Vars**: `VITE_API_URL` (Point to your Render Backend URL)
