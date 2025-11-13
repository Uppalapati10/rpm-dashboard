import axios from "axios";
import { useEffect, useState } from "react";

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/patients").then((res) => {
      setPatients(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <h2>Patient List</h2>
      {patients.map((id) => (
        <p key={id} onClick={() => (window.location.href = `/doctor/patient/${id}`)}>
          {id}
        </p>
      ))}
    </div>
  );
}
