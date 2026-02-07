// // // import { useNavigate } from "react-router-dom";

// // // export default function Navbar() {
// // //   const navigate = useNavigate();

// // //   const logout = () => {
// // //     localStorage.removeItem("token");
// // //     navigate("/");
// // //   };

// // //   return (
// // //     <nav className="flex justify-between items-center px-6 py-4 bg-indigo-600 text-white">
// // //       <h1 className="text-xl font-bold">Study Manager</h1>
// // //       <div className="space-x-4">
// // //         <button onClick={() => navigate("/dashboard")}>Dashboard</button>
// // //         <button onClick={() => navigate("/upload")}>Upload</button>
// // //         <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
// // //           Logout
// // //         </button>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import EduPilotLogo from "../assets/logo";
// // export default function Navbar() {
// //   const navigate = useNavigate();
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const [open, setOpen] = useState(false);

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="bg-white px-6 py-3 flex justify-between items-center">
// //       {/* Logo */}
// //       {/* <Link to="/dashboard" className="text-white text-xl font-bold">
// //         EduPilot
// //       </Link> */}
// //       <div className="flex items-center gap-2">
// //       <EduPilotLogo width={180} height={52} />
// //     </div>


// //       {/* Right Side */}
// //       <div className="flex items-center gap-4">

// //         {/* Upload Button */}
// //         <Link
// //           to="/upload"
// //           className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100"
// //         >
// //           Upload
// //         </Link>

// //         {/* Account Button */}
// //         <div className="relative">
// //           <button
// //             onClick={() => setOpen(!open)}
// //             className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400"
// //           >
// //             <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">
// //               {user?.name?.charAt(0)}
// //             </div>
// //             <span>{user?.name}</span>
// //             <span>▼</span>
// //           </button>

// //           {open && (
// //             <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-xl shadow-lg w-64 overflow-hidden">

// //               {/* User Info */}
// //               <div className="p-4 border-b">
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
// //                     {user?.name?.charAt(0)}
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold">{user?.name}</p>
// //                     <p className="text-sm text-gray-500">{user?.email}</p>
// //                     <p className="text-xs text-gray-400">
// //                       {user?.course || "Course not set"}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Actions */}
// //               <div className="py-2">
// //                 <button
// //                   className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
// //                   onClick={() => navigate("/account")}
// //                 >
// //                   Account Settings
// //                 </button>

// //                 <button
// //                   className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 text-sm"
// //                   onClick={handleLogout}
// //                 >
// //                   Logout
// //                 </button>
// //               </div>

// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import EduPilotLogo from "../assets/logo";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [open, setOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="
//       bg-white px-6 py-3 flex justify-between items-center
//       sticky top-0 z-50
//       border-b shadow-sm
//     ">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <EduPilotLogo width={180} height={52} />
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-4">
//         {/* Upload Button */}
//         <Link
//           to="/upload"
//           className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100"
//         >
//           Upload
//         </Link>

//         {/* Account Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400"
//           >
//             <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">
//               {user?.name?.charAt(0)}
//             </div>
//             <span className="hidden sm:block">{user?.name}</span>
//             <span>▼</span>
//           </button>

//           {open && (
//             <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-xl shadow-lg w-64 overflow-hidden">
//               {/* User Info */}
//               <div className="p-4 border-b">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
//                     {user?.name?.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-semibold">{user?.name}</p>
//                     <p className="text-sm text-gray-500">{user?.email}</p>
//                     <p className="text-xs text-gray-400">
//                       {user?.course || "Course not set"}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="py-2">
//                 <button
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                   onClick={() => navigate("/account")}
//                 >
//                   Account Settings
//                 </button>

//                 <button
//                   className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 text-sm"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import EduPilotLogo from "../assets/logo";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [open, setOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white sticky top-0 z-50 border-b shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
//         {/* Logo */}
//         <div className="flex items-center">
//           <EduPilotLogo width={160} height={48} />
//         </div>

//         {/* Desktop Actions */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link
//             to="/upload"
//             className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100"
//           >
//             Upload
//           </Link>

//           {/* Account Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setOpen(!open)}
//               className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
//             >
//               <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">
//                 {user?.name?.charAt(0)}
//               </div>
//               <span>{user?.name}</span>
//               <span>▼</span>
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg overflow-hidden">
//                 <div className="p-4 border-b">
//                   <p className="font-semibold">{user?.name}</p>
//                   <p className="text-sm text-gray-500">{user?.email}</p>
//                 </div>

//                 <button
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                   onClick={() => navigate("/account")}
//                 >
//                   Account Settings
//                 </button>

//                 <button
//                   className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 text-sm"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="md:hidden text-gray-700 text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="md:hidden bg-white border-t shadow-sm px-4 py-4 space-y-3">
//           <Link
//             to="/upload"
//             onClick={() => setMobileMenu(false)}
//             className="block w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-medium text-center"
//           >
//             Upload
//           </Link>

//           <div className="flex items-center gap-3 px-2">
//             <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
//               {user?.name?.charAt(0)}
//             </div>
//             <div>
//               <p className="font-semibold">{user?.name}</p>
//               <p className="text-xs text-gray-500">{user?.email}</p>
//             </div>
//           </div>

//           <button
//             onClick={() => {
//               setMobileMenu(false);
//               navigate("/account");
//             }}
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
//           >
//             Account Settings
//           </button>

//           <button
//             onClick={handleLogout}
//             className="block w-full text-left px-4 py-2 bg-red-50 text-red-600 rounded-lg"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EduPilotLogo from "../assets/logo";

export default function Navbar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b shadow-sm">
      <div className="px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <EduPilotLogo width={160} height={48} />
        </div>

        {/* RIGHT: Desktop only */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/upload"
            className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100"
          >
            Upload
          </Link>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
            >
              <div className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">
                {user?.name?.charAt(0)}
              </div>
              <span>{user?.name}</span>
              <span>▼</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>

                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => navigate("/account")}
                >
                  Account Settings
                </button>

                <button
                  className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 text-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}
