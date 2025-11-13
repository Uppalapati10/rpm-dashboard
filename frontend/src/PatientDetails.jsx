import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PatientDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/patients/${id}`).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>Patient Details (Doctor View)</h1>
      <h2>Patient ID: {id}</h2>

      {data.map((d) => (
        <p key={d.Timestamp}>
          BP: {d.BloodPressure} | HR: {d.HeartRate} | Glucose: {d.Glucose} | Time: {d.Timestamp}
        </p>
      ))}
    </div>
  );
}
