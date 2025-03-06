import React, { useState } from "react";

const sampleData = [
  {
    produkt: "Gas",
    fabrikant: "Baxi",
    model: "WGB 15-38 E",
    fejlkode: "10",
    forklaring: "Udetemperatur følerfejl",
    løsningsforslag: "Kontroller tilslutning og udetemperaturføler.",
  },
  {
    produkt: "Gas",
    fabrikant: "Baxi",
    model: "WGB 15-38 E",
    fejlkode: "20",
    forklaring: "Fejl i kedeltemperaturføler",
    løsningsforslag: "Kontroller følertilslutning, udskift føler.",
  },
  {
    produkt: "Oil",
    fabrikant: "Viessmann",
    model: "Vitodens 200",
    fejlkode: "E5",
    forklaring: "Brænderfejl",
    løsningsforslag: "Rens brænder og kontroller olie.",
  },
  {
    produkt: "Oil",
    fabrikant: "Viessmann",
    model: "Vitodens 300",
    fejlkode: "E10",
    forklaring: "Trykfald i oliebrænder",
    løsningsforslag: "Efterfyld olie, kontroller brænderen.",
  },
  {
    produkt: "Oil",
    fabrikant: "Viessmann",
    model: "Vitodens 200",
    fejlkode: "E15",
    forklaring: "Overophedningsfejl",
    løsningsforslag: "Vent på afkøling, kontroller temperatur.",
  },
];

export default function App() {
  const [selected, setSelected] = useState({
    produkt: "",
    fabrikant: "",
    model: "",
    fejlkode: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  const handleSelection = (key, value) => {
    const updatedSelection = { ...selected, [key]: value };
    setSelected(updatedSelection);

    const newFilteredData = sampleData.filter(
      (entry) =>
        updatedSelection.produkt &&
        entry.produkt === updatedSelection.produkt &&
        updatedSelection.fabrikant &&
        entry.fabrikant === updatedSelection.fabrikant &&
        updatedSelection.model &&
        entry.model === updatedSelection.model &&
        updatedSelection.fejlkode &&
        entry.fejlkode === updatedSelection.fejlkode
    );
    setFilteredData(newFilteredData);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Fejlkodesøgning</h1>
      <select
        onChange={(e) => handleSelection("produkt", e.target.value)}
        style={{ fontSize: "16px", padding: "10px", margin: "5px" }}
      >
        <option value="">Vælg Produkt</option>
        {[...new Set(sampleData.map((d) => d.produkt))].map((prod) => (
          <option key={prod} value={prod}>
            {prod}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => handleSelection("fabrikant", e.target.value)}
        disabled={!selected.produkt}
        style={{ fontSize: "16px", padding: "10px", margin: "5px" }}
      >
        <option value="">Vælg Fabrikat</option>
        {[
          ...new Set(
            sampleData
              .filter((d) => d.produkt === selected.produkt)
              .map((d) => d.fabrikant)
          ),
        ].map((fab) => (
          <option key={fab} value={fab}>
            {fab}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => handleSelection("model", e.target.value)}
        disabled={!selected.fabrikant}
        style={{ fontSize: "16px", padding: "10px", margin: "5px" }}
      >
        <option value="">Vælg Model</option>
        {[
          ...new Set(
            sampleData
              .filter((d) => d.fabrikant === selected.fabrikant)
              .map((d) => d.model)
          ),
        ].map((mod) => (
          <option key={mod} value={mod}>
            {mod}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => handleSelection("fejlkode", e.target.value)}
        disabled={!selected.model}
        style={{ fontSize: "16px", padding: "10px", margin: "5px" }}
      >
        <option value="">Vælg Fejlkode</option>
        {[
          ...new Set(
            sampleData
              .filter((d) => d.model === selected.model)
              .map((d) => d.fejlkode)
          ),
        ].map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      {filteredData.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            Forklaring:{" "}
            <span style={{ fontWeight: "normal" }}>
              {filteredData[0].forklaring}
            </span>
          </p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            Løsningsforslag:{" "}
            <span style={{ fontWeight: "normal" }}>
              {filteredData[0].løsningsforslag}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
