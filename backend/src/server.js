import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();


const app = express();
const __dirname = path.resolve();



const PORT = process.env.PORT;

app.use("/api/auth" , authRoutes);
app.use("/api/message" , messageRoutes);

//make ready for deployment
if(process.env.NODE_ENV === "production") 
{
   app.use(express.static(path.join(__dirname , "../frontend/dist")));

   app.use((req ,res)=>{
    res.sendFile(path.join(__dirname, "../frontend" ,"dist" , "index.html"));
   });
}


app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
