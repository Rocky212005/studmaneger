// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api/axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Student Material Manager
//         </h1>

//         <form onSubmit={submit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-indigo-600 font-medium">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       setLoading(true);
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       navigate("/home");
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* LEFT SIDE (Branding) */}
//       <div className="hidden lg:flex w-1/2 bg-amber-950 text-white flex-col justify-center px-16">
//         <h1 className="text-4xl font-bold mb-4">
//           Learn smarter with EduPilot
//         </h1>
//         <p className="text-lg text-indigo-100 max-w-md">
//           Access notes, documents, and study materials shared by students from
//           your course.
//         </p>

//         <ul className="mt-8 space-y-3 text-indigo-100">
//           <li>✔ Verified study materials</li>
//           <li>✔ Upload & manage your documents</li>
//           <li>✔ Trending notes for your course</li>
//         </ul>
//       </div>

//       {/* RIGHT SIDE (Login Form) */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
//         <div className="max-w-md w-full">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             Log in
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Access your study dashboard
//           </p>

//           {error && (
//             <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg mb-4">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 placeholder="••••••••"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition"
//             >
//               {loading ? "Signing in..." : "Log in"}
//             </button>
//           </form>

//           <p className="text-sm text-gray-600 mt-6 text-center">
//             Don’t have an account?{" "}
//             <Link
//               to="/register"
//               className="text-indigo-600 font-medium hover:underline"
//             >
//               Sign up
//             </Link>
//           </p>

//           <p className="text-xs text-gray-400 mt-6 text-center">
//             By logging in, you agree to our Terms & Privacy Policy
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT – BRANDING */}
      <div className="hidden lg:flex lg:w-1/2 bg-amber-950 text-white flex-col justify-center px-12 xl:px-16">
        <h1 className="text-3xl xl:text-4xl font-bold mb-4">
          Learn smarter with EduPilot
        </h1>
        <p className="text-base xl:text-lg text-indigo-100 max-w-md">
          Access notes, documents, and study materials shared by students from
          your course.
        </p>

        <ul className="mt-8 space-y-3 text-indigo-100 text-sm xl:text-base">
          <li>✔ Verified study materials</li>
          <li>✔ Upload & manage your documents</li>
          <li>✔ Trending notes for your course</li>
        </ul>
      </div>

      {/* RIGHT – LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-8">
        <div className="max-w-md w-full">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Log in
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Access your study dashboard
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-500 transition"
            >
              {loading ? "Signing in..." : "Log in"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>

          <p className="text-xs text-gray-400 mt-6 text-center">
            By logging in, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
