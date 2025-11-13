import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import DoctorDashboard from "./DoctorDashboard";
import PatientDashboard from "./PatientDashboard";
import PatientDetails from "./PatientDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient/:id" element={<PatientDashboard />} />
        <Route path="/doctor/patient/:id" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
