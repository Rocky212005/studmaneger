// // import { useState } from "react";
// // import Navbar from "../components/Navbar";
// // import SubjectCard from "../components/SubjectCard";
// // import MaterialList from "../components/MaterialList";

// // const subjects = ["Math", "DSA", "DBMS", "OS", "CN"];

// // export default function Dashboard() {
// //   const [selected, setSelected] = useState(null);

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <Navbar />

// //       <div className="p-6">
// //         <h2 className="text-2xl font-bold mb-6">Select Subject</h2>

// //         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
// //           {subjects.map((s) => (
// //             <SubjectCard key={s} subject={s} onClick={() => setSelected(s)} />
// //           ))}
// //         </div>

// //         {selected && <MaterialList subject={selected} />}
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// export default function Dashboard() {
//   const token = localStorage.getItem("token");

//   const [materials, setMaterials] = useState([]);
//   const [subjects, setSubjects] = useState([]);
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchMaterials = async (subject = "") => {
//     try {
//       setLoading(true);
//       const res = await axios.get(
//         `http://localhost:5000/api/materials${subject ? "?subject=" + subject : ""}`
//       );
//       setMaterials(res.data);
//       const uniqueSubjects = [...new Set(res.data.map((m) => m.subject))];
//       setSubjects(uniqueSubjects);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to load materials");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMaterials(selectedSubject);
//   }, [selectedSubject]);

//   const handleDownload = async (id) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/materials/download/${id}`,
//         { headers: { Authorization: `Bearer ${token}` }, responseType: "blob" }
//       );
//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "material.pdf");
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (err) {
//       alert(err.response?.data?.message || "Download failed");
//     }
//   };

//   // Filter and search materials
//   const filteredMaterials = materials.filter((m) =>
//     m.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content area */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Navbar */}
//         <Navbar />

//         <div className="p-6 flex-1">
//           {/* Header */}
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
//             <h1 className="text-3xl font-bold text-gray-800"> My Library</h1>

//             <div className="flex flex-col sm:flex-row gap-3">
//               {/* Subject filter */}
//               <select
//                 value={selectedSubject}
//                 onChange={(e) => setSelectedSubject(e.target.value)}
//                 className="border rounded-lg px-3 py-2"
//               >
//                 <option value="">All Subjects</option>
//                 {subjects.map((subj) => (
//                   <option key={subj} value={subj}>
//                     {subj}
//                   </option>
//                 ))}
//               </select>

//               {/* Search input */}
//               <input
//                 type="text"
//                 placeholder="Search by title..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="border rounded-lg px-3 py-2"
//               />
//             </div>
//           </div>

//           {/* Materials grid */}
//           {loading ? (
//             <p className="text-gray-500 text-center">Loading materials...</p>
//           ) : error ? (
//             <p className="text-red-500 text-center">{error}</p>
//           ) : filteredMaterials.length === 0 ? (
//             <p className="text-gray-500 text-center">No materials found.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {filteredMaterials.map((mat) => (
//                 <div
//                   key={mat._id}
//                   className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between hover:shadow-2xl transition-shadow"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 font-bold text-xl">
//                       📄
//                     </div>
//                     <div>
//                       <h2 className="text-lg font-semibold">{mat.title}</h2>
//                       <p className="text-sm text-gray-500">{mat.subject}</p>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 text-sm line-clamp-3">
//                     {mat.description || "No description provided"}
//                   </p>

//                   <div className="flex justify-between items-center mt-auto">
//                     <button
//                       onClick={() => handleDownload(mat._id)}
//                       className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
//                     >
//                       Download
//                     </button>
//                     <span className="text-gray-500 text-sm">
//                       Downloads: {mat.downloads || 0}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  const [materials, setMaterials] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMaterials = async (subject = "") => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/materials${subject ? "?subject=" + subject : ""}`
      );
      setMaterials(res.data);
      setSubjects([...new Set(res.data.map((m) => m.subject))]);
      setLoading(false);
    } catch {
      setError("Failed to load materials");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials(selectedSubject);
  }, [selectedSubject]);

  const handleDownload = async (id) => {
    const res = await axios.get(
      `http://localhost:5000/api/materials/download/${id}`,
      { headers: { Authorization: `Bearer ${token}` }, responseType: "blob" }
    );
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "material.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const filteredMaterials = materials.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col w-full">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              My Library
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full sm:w-48"
              >
                <option value="">All Subjects</option>
                {subjects.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full sm:w-56"
              />
            </div>
          </div>

          {/* States */}
          {loading ? (
            <p className="text-center text-gray-500">Loading materials...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredMaterials.length === 0 ? (
            <p className="text-center text-gray-500">No materials found.</p>
          ) : (

            /* Cards Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredMaterials.map((mat) => (
                <div
                  key={mat._id}
                  className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl">
                      📄
                    </div>
                    <div>
                      <h2 className="font-semibold">{mat.title}</h2>
                      <p className="text-sm text-gray-500">{mat.subject}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {mat.description || "No description provided"}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <button
                      onClick={() => handleDownload(mat._id)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                    >
                      Download
                    </button>
                    <span className="text-xs text-gray-500">
                      {mat.downloads || 0} downloads
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
