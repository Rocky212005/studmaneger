// import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// export default function MyDocuments() {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   const [documents, setDocuments] = useState([]);
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [docType, setDocType] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Fetch documents
//   const fetchDocuments = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:5000/api/documents", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setDocuments(res.data);
//     } catch (err) {
//       setError("Failed to load documents");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   // Upload document
//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file || !title || !docType) {
//       return alert("All fields are required");
//     }

//     const formData = new FormData();
//     formData.append("document", file); // MUST match multer field
//     formData.append("title", title);
//     formData.append("docType", docType);

//     try {
//       await axios.post(
//         "http://localhost:5000/api/documents/upload",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Document uploaded successfully ✅");
//       setFile(null);
//       setTitle("");
//       setDocType("");
//       fetchDocuments();
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert(err.response?.data?.message || "Upload failed");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <Navbar />

//         <div className="p-6 max-w-6xl mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-6">My Documents</h1>

//           {/* Upload Form */}
//           <form
//             onSubmit={handleUpload}
//             className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow mb-8"
//           >
//             <input
//               type="text"
//               placeholder="Document title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="border px-3 py-2 rounded-lg"
//               required
//             />

//             <select
//               value={docType}
//               onChange={(e) => setDocType(e.target.value)}
//               className="border px-3 py-2 rounded-lg"
//               required
//             >
//               <option value="">Select type</option>
//               <option value="PAN">PAN Card</option>
//               <option value="AADHAR">Aadhar Card</option>
//               <option value="DL">Driving Licence</option>
//               <option value="NOTES">Important Notes</option>
//             </select>

//             <input
//               type="file"
//               accept=".pdf,.jpg,.jpeg,.png"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="border px-3 py-2 rounded-lg"
//               required
//             />

//             <button className="bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
//               Upload
//             </button>
//           </form>

//           {/* Documents List */}
//           {loading ? (
//             <p className="text-gray-500">Loading documents...</p>
//           ) : error ? (
//             <p className="text-red-500">{error}</p>
//           ) : documents.length === 0 ? (
//             <p className="text-gray-500">No documents uploaded yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {documents.map((doc) => (
//                 <div
//                   key={doc._id}
//                   className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl">
//                       📄
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">{doc.title}</h3>
//                       <p className="text-sm text-gray-500">{doc.docType}</p>
//                     </div>
//                   </div>

//                   <p className="text-xs text-gray-400">
//                     Uploaded on{" "}
//                     {new Date(doc.createdAt).toLocaleDateString()}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MyDocuments() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [docType, setDocType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/documents", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDocuments(res.data);
    } catch {
      setError("Failed to load documents");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title || !docType) return alert("All fields are required");

    const formData = new FormData();
    formData.append("document", file);
    formData.append("title", title);
    formData.append("docType", docType);

    await axios.post(
      "http://localhost:5000/api/documents/upload",
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setFile(null);
    setTitle("");
    setDocType("");
    fetchDocuments();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar – hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col w-full">
        <Navbar />

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">

          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            My Documents
          </h1>

          {/* Upload Form */}
          <form
            onSubmit={handleUpload}
            className="bg-white p-4 sm:p-6 rounded-xl shadow mb-8
                       grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <input
              type="text"
              placeholder="Document title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full"
              required
            />

            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full"
              required
            >
              <option value="">Select type</option>
              <option value="PAN">PAN Card</option>
              <option value="AADHAR">Aadhar Card</option>
              <option value="DL">Driving Licence</option>
              <option value="NOTES">Important Notes</option>
            </select>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files[0])}
              className="border px-3 py-2 rounded-lg w-full"
              required
            />

            <button className="bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition w-full">
              Upload
            </button>
          </form>

          {/* Documents */}
          {loading ? (
            <p className="text-gray-500 text-center">Loading documents...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : documents.length === 0 ? (
            <p className="text-gray-500 text-center">
              No documents uploaded yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <div
                  key={doc._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl">
                      📄
                    </div>
                    <div>
                      <h3 className="font-semibold">{doc.title}</h3>
                      <p className="text-sm text-gray-500">{doc.docType}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400">
                    Uploaded on{" "}
                    {new Date(doc.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
