import { useEffect, useState } from "react";
import API from "../api/axios";
const BASE_URL = "https://studmaneger.onrender.com/api".replace("/api", "");

export default function MaterialList({ subject }) {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    API.get(`/materials?subject=${subject}`)
      .then((res) => setMaterials(res.data))
      .catch(() => alert("Failed to load materials"));
  }, [subject]);
  

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">{subject} Materials</h3>

      <div className="space-y-3">
        {materials.map((m) => (
          <div
            key={m._id}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <span>{m.title}</span>
            <a
              href={`${BASE_URL}/materials/download/${m._id}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 font-medium"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
