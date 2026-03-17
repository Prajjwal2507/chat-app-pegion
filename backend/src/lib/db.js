import moongose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await moongose.connect(process.env.MONGO_URL);
    console.log("MONGODB connected : ", conn.connection.host);
  } catch (err) {
    console.error("Error connectuion to mongodb :", err);
    process.exit(1); // 1 status code means fail , 0 means success
  }
};
 