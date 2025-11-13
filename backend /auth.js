export const loginDoctor = (req, res) => {
  const { email, password } = req.body;

  if (email === "doctor@doc.com" && password === "12345") {
    return res.json({ role: "doctor", token: "doctor-token-123" });
  }

  return res.status(401).json({ message: "Invalid doctor credentials" });
};

export const loginPatient = (req, res) => {
  const { patientId } = req.body;
  return res.json({ role: "patient", patientId });
};
