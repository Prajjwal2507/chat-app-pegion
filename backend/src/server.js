import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use("/api/auth" , authRoutes);
app.use("/api/message" , messageRoutes);


app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
