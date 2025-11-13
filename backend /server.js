import express from "express";
import cors from "cors";
import multer from "multer";
import { loadCSV } from "./utils/loadData.js";
import { loginDoctor, loginPatient } from "./auth.js";
import { getAllPatients, getPatientData } from "./patientController.js";

const app = express();
app.use(cors());
app.use(express.json());

// Load dataset
await loadCSV();

// Multer for voice note
const upload = multer({ dest: "backend/uploads/" });

// Routes
app.post("/login/doctor", loginDoctor);
app.post("/login/patient", loginPatient);

app.get("/patients", getAllPatients);
app.get("/patients/:id", getPatientData);

app.post("/voice-note/:id", upload.single("audio"), (req, res) => {
  res.json({ message: "Voice note uploaded", file: req.file });
});

// Start server
app.listen(5000, () => console.log("Backend running on port 5000"));

