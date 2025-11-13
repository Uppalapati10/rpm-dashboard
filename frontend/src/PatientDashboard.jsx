import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PatientDashboard() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [voiceNote, setVoiceNote] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/patients/${id}`).then((res) => setData(res.data));
  }, []);

  const uploadVoice = async () => {
    const formData = new FormData();
    formData.append("audio", voiceNote);
    await axios.post(`http://localhost:5000/voice-note/${id}`, formData);
    alert("Voice note uploaded!");
  };

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <h2>Your ID: {id}</h2>

      <h3>Health Records</h3>
      {data.map((d) => (
        <p key={d.Timestamp}>
          BP: {d.BloodPressure} | HR: {d.HeartRate} | Glucose: {d.Glucose}
        </p>
      ))}

      <h3>Upload Voice Note</h3>
      <input type="file" onChange={(e) => setVoiceNote(e.target.files[0])} />
      <button onClick={uploadVoice}>Upload</button>
    </div>
  );
}
