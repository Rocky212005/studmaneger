// import { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// export default function Home() {
//   const [query, setQuery] = useState("");
//   const [allMaterials, setAllMaterials] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchMaterials = async (subject = "") => {
//     try {
//       setLoading(true);
//       const res = await axios.get(
//         `http://localhost:5000/api/materials${
//           subject ? `?subject=${subject}` : ""
//         }`
//       );
//       setAllMaterials(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMaterials();
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchMaterials(query.trim());
//   };

//   const handleDownload = (id) => {
//     window.open(
//       `http://localhost:5000/api/materials/download/${id}`,
//       "_blank"
//     );
//   };

//   const trending = [...allMaterials]
//     .sort((a, b) => (b.downloads || 0) - (a.downloads || 0))
//     .slice(0, 6);

//   const topForYou = allMaterials.slice(0, 6);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Navbar />

//         {/* HERO + SEARCH */}
//         <section className="max-w-6xl mx-auto px-6 py-14 text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-3">
//             Smarter Study Starts Here
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Search and download verified study material for your courses
//           </p>

//           <form
//             onSubmit={handleSearch}
//             className="max-w-xl mx-auto flex gap-3"
//           >
//             <input
//               type="text"
//               placeholder="Search course (DBMS, OS, CN, AI)"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="flex-1 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
//             />
//             <button className="bg-indigo-600 text-white px-6 rounded-xl hover:bg-indigo-700 transition">
//               Search
//             </button>
//           </form>
//         </section>

//         {/* TRENDING */}
//         <Section
//           title="🔥 Trending in Your Courses"
//           data={trending}
//           onDownload={handleDownload}
//         />

//         {/* TOP FOR YOU */}
//         <Section
//           title="⭐ Top Documents For You"
//           data={topForYou}
//           onDownload={handleDownload}
//         />

//         {/* FOOTER */}
//         <footer className="bg-white border-t mt-16">
//           <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-2">
//                 StudyManager
//               </h3>
//               <p>All your study material. One secure place.</p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
//               <ul className="space-y-1">
//                 <li>Dashboard</li>
//                 <li>My Documents</li>
//                 <li>Upload Material</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
//               <p>Email: support@studymanager.com</p>
//               <p>Built for students ❤️</p>
//             </div>
//           </div>

//           <div className="text-center text-xs text-gray-400 py-4">
//             © {new Date().getFullYear()} StudyManager. All rights reserved.
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// /* Reusable Section Component */
// function Section({ title, data, onDownload }) {
//   if (data.length === 0) return null;

//   return (
//     <section className="max-w-6xl mx-auto px-6 mb-14">
//       <h2 className="text-2xl font-bold mb-6">{title}</h2>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col"
//           >
//             <div className="flex items-center gap-3 mb-3">
//               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl text-indigo-600">
//                 📘
//               </div>
//               <div>
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <p className="text-sm text-gray-500">{item.subject}</p>
//               </div>
//             </div>

//             <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//               {item.description || "No description available"}
//             </p>

//             <button
//               onClick={() => onDownload(item._id)}
//               className="mt-auto bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Download
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  const [query, setQuery] = useState("");
  const [allMaterials, setAllMaterials] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMaterials = async (subject = "") => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/materials${
          subject ? `?subject=${subject}` : ""
        }`
      );
      setAllMaterials(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMaterials(query.trim());
  };

  const handleDownload = (id) => {
    window.open(
      `http://localhost:5000/api/materials/download/${id}`,
      "_blank"
    );
  };

  const trending = [...allMaterials]
    .sort((a, b) => (b.downloads || 0) - (a.downloads || 0))
    .slice(0, 6);

  const topForYou = allMaterials.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        <Navbar />

        {/* HERO + SEARCH */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Smarter Study Starts Here
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            Search and download verified study material for your courses
          </p>

          <form
            onSubmit={handleSearch}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              placeholder="Search course (DBMS, OS, CN, AI)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
              Search
            </button>
          </form>
        </section>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 mb-10">
            Loading materials...
          </p>
        )}

        {/* TRENDING */}
        <Section
          title="🔥 Trending in Your Courses"
          data={trending}
          onDownload={handleDownload}
        />

        {/* TOP FOR YOU */}
        <Section
          title="⭐ Top Documents For You"
          data={topForYou}
          onDownload={handleDownload}
        />

        {/* FOOTER */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                StudyManager
              </h3>
              <p>All your study material. One secure place.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quick Links
              </h3>
              <ul className="space-y-1">
                <li>Dashboard</li>
                <li>My Documents</li>
                <li>Upload Material</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Support
              </h3>
              <p>Email: support@studymanager.com</p>
              <p>Built for students ❤️</p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 py-4">
            © {new Date().getFullYear()} StudyManager. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Reusable Section */
function Section({ title, data, onDownload }) {
  if (data.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-14">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl text-indigo-600">
                📘
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subject}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {item.description || "No description available"}
            </p>

            <button
              onClick={() => onDownload(item._id)}
              className="mt-auto bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
