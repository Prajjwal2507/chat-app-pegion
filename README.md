# 🕊️ Pigeon — Real-Time Chat App

A full-stack real-time chat application built with the MERN stack and Socket.io. Supports private messaging, image sharing, online presence tracking, and profile customization.

**Live Demo:** [new-chat-app-dusky-seven.vercel.app](https://new-chat-app-inky.vercel.app/)

---

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS + DaisyUI
- Zustand (state management)
- Socket.io Client
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Socket.io
- JWT Authentication (via cookies)
- Cloudinary (image uploads)

---

## Features

- 🔐 JWT-based authentication with secure HTTP-only cookies
- 💬 Real-time private messaging via WebSockets
- 🖼️ Image sharing in chats
- 🟢 Online/offline presence indicators
- 🔔 Keyboard sound effects while typing
- 🔇 Sound toggle (on/off)
- 🖼️ Profile picture upload and update
- 📱 Fully responsive — works on mobile and desktop
- 🎨 Animated gradient border UI
- Rate limiting

---

## Project Structure

```
new-chat-app/
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # LoginPage, SignUpPage, ChatPage
│   │   ├── store/          # Zustand stores (auth, chat)
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # axios instance
│   └── .env                # Frontend environment variables
│
└── backend/                # Express + Node.js API
    └── src/
        ├── controllers/    # Auth, message controllers
        ├── routes/         # API routes
        ├── models/         # Mongoose models
        ├── middleware/     # Auth middleware
        └── lib/            # DB, socket, env config
```

---

## Author

**Prajjwal** — [github.com/Prajjwal2507](https://github.com/Prajjwal2507)
