// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import API from "../api/axios";

// export default function Upload() {
//   const [title, setTitle] = useState("");
//   const [subject, setSubject] = useState("");
//   const [pdf, setPdf] = useState(null);

//   const submit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("title", title);
//     data.append("subject", subject);
//     data.append("pdf", pdf);

//     try {
//       await API.post("/materials/upload", data);
//       alert("Material uploaded");
//     } catch {
//       alert("Upload failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />

//       <div className="flex justify-center mt-10">
//         <form
//           onSubmit={submit}
//           className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
//         >
//           <h2 className="text-xl font-bold text-center">Upload Material</h2>

//           <input
//             className="w-full border p-2 rounded"
//             placeholder="Title"
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />

//           <select
//             className="w-full border p-2 rounded"
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           >
//             <option value="">Select Subject</option>
//             <option>Math</option>
//             <option>DSA</option>
//             <option>DBMS</option>
//             <option>OS</option>
//             <option>CN</option>
//           </select>

//           <input
//             type="file"
//             accept="application/pdf"
//             onChange={(e) => setPdf(e.target.files[0])}
//             required
//           />

//           <button className="w-full bg-indigo-600 text-white py-2 rounded">
//             Upload
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [pdf, setPdf] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("subject", subject);
    data.append("pdf", pdf);

    try {
      await API.post("/materials/upload", data);
      alert("Material uploaded ✅");
      setTitle("");
      setSubject("");
      setPdf(null);
    } catch {
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center px-4 py-10">
        <form
          onSubmit={submit}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
            Upload Material
          </h2>

          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <select
            className="w-full border rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-400 outline-none"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Select Subject</option>
            <option>Math</option>
            <option>DSA</option>
            <option>DBMS</option>
            <option>OS</option>
            <option>CN</option>
          </select>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            required
            className="w-full text-sm file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-indigo-50 file:text-indigo-600
              hover:file:bg-indigo-100"
          />

          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
