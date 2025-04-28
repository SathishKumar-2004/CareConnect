import express from "express";
import {
  appointmentsDoctor,
  apppointmentCancel,
  apppointmentComplete,
  doctorDashboard,
  doctorProfile,
  getDoctors,
  loginDoctor,
  updateDoctorProfile,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", getDoctors);

doctorRouter.post("/login", loginDoctor);

doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);

doctorRouter.post("/complete-appointment", authDoctor, apppointmentComplete);

doctorRouter.post("/cancel-appointment", authDoctor, apppointmentCancel);

doctorRouter.get("/dashboard", authDoctor, doctorDashboard);

doctorRouter.get("/profile", authDoctor, doctorProfile);

doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

export default doctorRouter;
