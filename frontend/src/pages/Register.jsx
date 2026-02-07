// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// export default function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       await axios.post("http://localhost:5000/api/auth/register", formData);
//       navigate("/login");
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Registration failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
//           Student Register
//         </h2>

//         {error && (
//           <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
//           >
//             {loading ? "Creating account..." : "Register"}
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-indigo-600 font-medium hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-6">
          Student Register
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded-lg mb-4 text-sm text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
