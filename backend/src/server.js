import express from "express";
//import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import cors from "cors";
import { app, server } from "./lib/socket.js";

//dotenv.config();

const __dirname = path.resolve();

const PORT = ENV.PORT || 5005;

const allowedOrigins = [
  "http://localhost:5173",
  "https://chat-app-pegion-7.onrender.com",
];
app.use(express.json({ limit : "5mb"})); // for parsing the json data that is comming from body
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
  connectDB();
});
