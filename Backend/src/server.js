import express from "express";
import router from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(rateLimiter)
app.use("/api/notes", router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("SERVER STARTED ON PORT : ", port);
  });
});
