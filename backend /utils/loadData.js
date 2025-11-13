import fs from "fs";
import csv from "csv-parser";

let patientData = [];

export const loadCSV = () => {
  patientData = [];
  return new Promise((resolve) => {
    fs.createReadStream("backend/data/patient_data.csv")
      .pipe(csv())
      .on("data", (row) => {
        patientData.push(row);
      })
      .on("end", () => resolve(patientData));
  });
};

export const getData = () => patientData;
