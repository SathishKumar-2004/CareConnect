import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();

const port = process.env.PORT || 4000;

connectDb(); // this is from mongodb.js from config folder to connect the database

connectCloudinary(); // this function connects the cloudinary from the cloudinary.js file in the config folder

// middlewares
app.use(express.json());
app.use(cors());

// api endPoints

//localhost:4000/api/admin/...
app.use("/api/admin", adminRouter);

//localhost:4000/api/doctor/...
app.use("/api/doctor", doctorRouter);

//localhost:4000/api/user/...
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Api working fine");
});

app.listen(port, () => console.log("server started", port));
