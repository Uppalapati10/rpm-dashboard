import { getData } from "./utils/loadData.js";

export const getAllPatients = (req, res) => {
  const data = getData();
  const patients = [...new Set(data.map((x) => x.PatientID))];
  res.json(patients);
};

export const getPatientData = (req, res) => {
  const id = req.params.id;
  const data = getData().filter((p) => p.PatientID === id);
  res.json(data);
};
