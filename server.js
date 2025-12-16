import db from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js"

dotenv.config();

const app = express();


app.use(express.json()); 


const PORT = process.env.PORT || 3000;


app.use("/api",studentRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
