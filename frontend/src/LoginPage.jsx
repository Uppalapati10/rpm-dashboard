import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [patientId, setPatientId] = useState("");

  const doctorLogin = async () => {
    const res = await axios.post("http://localhost:5000/login/doctor", {
      email,
      password,
    });
    if (res.data.role === "doctor") window.location.href = "/doctor";
  };

  const patientLogin = async () => {
    if (patientId) window.location.href = `/patient/${patientId}`;
  };

  return (
    <div>
      <h1>RPM Dashboard Login</h1>

      <h3>Doctor Login</h3>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={doctorLogin}>Login as Doctor</button>

      <h3>Patient Login</h3>
      <input placeholder="Patient ID" onChange={(e) => setPatientId(e.target.value)} />
      <button onClick={patientLogin}>Login as Patient</button>
    </div>
  );
}
