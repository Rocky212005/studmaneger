import { useEffect, useState } from "react";
import API from "../api/axios";

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
              href={`http://localhost:5000/api/materials/download/${m._id}`}
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
