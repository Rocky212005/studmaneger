// // // import { Link, useLocation } from "react-router-dom";

// // // export default function Sidebar() {
// // //   const location = useLocation();

// // //   // TEMP data (later replace with API data)
// // //   const user = {
// // //     name: "Rahul Mishra",
// // //     email: "rahul@email.com",
// // //     photo: "https://i.pravatar.cc/150?img=12",
// // //     uploads: 0,
// // //     upvotes: 0,
// // //   };

// // //   const menuItems = [
// // //     { name: "Home", path: "/home" },
// // //     { name: "My Library", path: "/dashboard" },
// // //     { name: "Upload Material", path: "/upload" },
// // //     { name: "My Documents", path: "/documents" },
// // //     { name: "Account Settings", path: "/account" },
// // //   ];

// // //   return (
// // //     <aside className="bg-gray-600 text-white w-64 min-h-screen hidden md:flex flex-col">
      
// // //       {/* User Profile */}
// // //       <div className="px-6 py-6 border-b border-indigo-500">
// // //         <div className="flex items-center gap-4">
// // //           <img
// // //             src={user.photo}
// // //             alt="User"
// // //             className="w-14 h-14 rounded-full border-2 border-white"
// // //           />
// // //           <div>
// // //             <p className="font-semibold">{user.name}</p>
// // //             <p className="text-sm text-indigo-200 truncate">
// // //               {user.email}
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Stats */}
// // //         <div className="flex justify-between mt-4 text-center">
// // //           <div>
// // //             <p className="text-lg font-bold">{user.uploads}</p>
// // //             <p className="text-xs text-indigo-200">Uploads</p>
// // //           </div>
// // //           <div>
// // //             <p className="text-lg font-bold">{user.upvotes}</p>
// // //             <p className="text-xs text-indigo-200">Upvotes</p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Navigation */}
// // //       <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
// // //         {menuItems.map((item) => (
// // //           <Link
// // //             key={item.path}
// // //             to={item.path}
// // //             className={`px-4 py-2 rounded-lg transition-colors ${
// // //               location.pathname === item.path
// // //                 ? "bg-indigo-500 font-semibold"
// // //                 : "hover:bg-indigo-500"
// // //             }`}
// // //           >
// // //             {item.name}
// // //           </Link>
// // //         ))}
// // //       </nav>
// // //     </aside>
// // //   );
// // // }


// // import { Link, useLocation } from "react-router-dom";

// // export default function Sidebar() {
// //   const location = useLocation();

// //   // TEMP data (replace later with API)
// //   const user = {
// //     name: "Rahul Mishra",
// //     email: "rahul@email.com",
// //     photo: "https://i.pravatar.cc/150?img=12",
// //     uploads: 0,
// //     upvotes: 0,
// //   };

// //   const menuItems = [
// //     { name: "Home", path: "/home" },
// //     { name: "My Library", path: "/dashboard" },
// //     { name: "Upload Material", path: "/upload" },
// //     { name: "My Documents", path: "/documents" },
// //     { name: "Account Settings", path: "/account" },
// //   ];

// //   return (
// //     <aside className="
// //       bg-slate-800 text-white w-64 
// //       hidden md:flex flex-col 
// //       sticky top-0 h-screen
// //     ">
// //       {/* User Profile */}
// //       <div className="px-6 py-6 border-b border-slate-700">
// //         <div className="flex items-center gap-4">
// //           <img
// //             src={user.photo}
// //             alt="User"
// //             className="w-14 h-14 rounded-full border-2 border-indigo-500"
// //           />
// //           <div className="overflow-hidden">
// //             <p className="font-semibold truncate">{user.name}</p>
// //             <p className="text-sm text-slate-400 truncate">
// //               {user.email}
// //             </p>
// //           </div>
// //         </div>

// //         {/* Stats */}
// //         <div className="flex justify-between mt-5">
// //           <div className="text-center">
// //             <p className="text-xl font-bold">{user.uploads}</p>
// //             <p className="text-xs text-slate-400">Uploads</p>
// //           </div>
// //           <div className="text-center">
// //             <p className="text-xl font-bold">{user.upvotes}</p>
// //             <p className="text-xs text-slate-400">Upvotes</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
// //         {menuItems.map((item) => (
// //           <Link
// //             key={item.path}
// //             to={item.path}
// //             className={`px-4 py-2 rounded-lg transition-all ${
// //               location.pathname === item.path
// //                 ? "bg-indigo-600 font-semibold"
// //                 : "hover:bg-slate-700"
// //             }`}
// //           >
// //             {item.name}
// //           </Link>
// //         ))}
// //       </nav>
// //     </aside>
// //   );
// // }

// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Sidebar() {
//   const location = useLocation();

//   // Load image from localStorage (optional)
//   const [photo, setPhoto] = useState(
//     localStorage.getItem("userPhoto") || "https://i.pravatar.cc/150?img=12"
//   );

//   const user = {
//     name: "Rahul Mishra",
//     email: "rahul@email.com",
//     uploads: 0,
//     upvotes: 0,
//   };

//   const menuItems = [
//     { name: "Home", path: "/home" },
//     { name: "My Library", path: "/dashboard" },
//     { name: "Upload Material", path: "/upload" },
//     { name: "My Documents", path: "/documents" },
//     { name: "Account Settings", path: "/account" },
//   ];

//   // Handle image selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const imageURL = URL.createObjectURL(file);
//     setPhoto(imageURL);

//     // Save locally (optional)
//     localStorage.setItem("userPhoto", imageURL);
//   };

//   return (
//     <aside className="bg-slate-800 text-white w-64 hidden md:flex flex-col sticky top-0 h-screen">
      
//       {/* User Profile */}
//       <div className="px-6 py-6 border-b border-slate-700">
//         <div className="flex items-center gap-4">

//           {/* Clickable image */}
//           <label className="cursor-pointer">
//             <img
//               src={photo}
//               alt="User"
//               className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
//             />
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </label>

//           <div className="overflow-hidden">
//             <p className="font-semibold truncate">{user.name}</p>
//             <p className="text-sm text-slate-400 truncate">{user.email}</p>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="flex justify-between mt-5">
//           <div className="text-center">
//             <p className="text-xl font-bold">{user.uploads}</p>
//             <p className="text-xs text-slate-400">Uploads</p>
//           </div>
//           <div className="text-center">
//             <p className="text-xl font-bold">{user.upvotes}</p>
//             <p className="text-xs text-slate-400">Upvotes</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
//         {menuItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`px-4 py-2 rounded-lg transition-all ${
//               location.pathname === item.path
//                 ? "bg-indigo-600 font-semibold"
//                 : "hover:bg-slate-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }

// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// export default function Sidebar() {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);

//   const [photo, setPhoto] = useState(
//     localStorage.getItem("userPhoto") || "https://i.pravatar.cc/150?img=12"
//   );

//   const user = {
//     name: "Rahul Mishra",
//     email: "rahul@email.com",
//     uploads: 0,
//     upvotes: 0,
//   };

//   const menuItems = [
//     { name: "Home", path: "/home" },
//     { name: "My Library", path: "/dashboard" },
//     { name: "Upload Material", path: "/upload" },
//     { name: "My Documents", path: "/documents" },
//     { name: "Account Settings", path: "/account" },
//   ];

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const imageURL = URL.createObjectURL(file);
//     setPhoto(imageURL);
//     localStorage.setItem("userPhoto", imageURL);
//   };

//   /* Sidebar content (reused for desktop & mobile) */
//   const SidebarContent = (
//     <div className="bg-slate-800 text-white w-64 h-full flex flex-col">
//       {/* User Profile */}
//       <div className="px-6 py-6 border-b border-slate-700">
//         <div className="flex items-center gap-4">
//           <label className="cursor-pointer">
//             <img
//               src={photo}
//               alt="User"
//               className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
//             />
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </label>

//           <div className="overflow-hidden">
//             <p className="font-semibold truncate">{user.name}</p>
//             <p className="text-sm text-slate-400 truncate">{user.email}</p>
//           </div>
//         </div>

//         <div className="flex justify-between mt-5">
//           <div className="text-center">
//             <p className="text-xl font-bold">{user.uploads}</p>
//             <p className="text-xs text-slate-400">Uploads</p>
//           </div>
//           <div className="text-center">
//             <p className="text-xl font-bold">{user.upvotes}</p>
//             <p className="text-xs text-slate-400">Upvotes</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
//         {menuItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             onClick={() => setOpen(false)}
//             className={`px-4 py-2 rounded-lg transition-all ${
//               location.pathname === item.path
//                 ? "bg-indigo-600 font-semibold"
//                 : "hover:bg-slate-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );

//   return (
//     <>
//       {/* Mobile Hamburger */}
//       <button
//         onClick={() => setOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white px-3 py-2 rounded-lg shadow"
//       >
//         ☰
//       </button>

//       {/* Desktop Sidebar */}
//       <aside className="hidden md:flex sticky top-0 h-screen">
//         {SidebarContent}
//       </aside>

//       {/* Mobile Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Mobile Drawer */}
//       <aside
//         className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 md:hidden
//           ${open ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {SidebarContent}
//       </aside>
//     </>
//   );
// }


import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const photo =
    localStorage.getItem("userPhoto") ||
    "https://i.pravatar.cc/150?img=12";

  const user = {
    name: "Rahul Mishra",
    email: "rahul@email.com",
    uploads: 0,
    upvotes: 0,
  };

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "My Library", path: "/dashboard" },
    { name: "Upload Material", path: "/upload" },
    { name: "My Documents", path: "/documents" },
    { name: "Account Settings", path: "/account" },
  ];

  const SidebarContent = (
    <div className="bg-slate-800 text-white w-64 h-full flex flex-col">
      <div className="px-6 py-6 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <img
            src={photo}
            alt="User"
            className="w-14 h-14 rounded-full border-2 border-indigo-500"
          />
          <div className="overflow-hidden">
            <p className="font-semibold truncate">{user.name}</p>
            <p className="text-sm text-slate-400 truncate">{user.email}</p>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="text-center">
            <p className="text-xl font-bold">{user.uploads}</p>
            <p className="text-xs text-slate-400">Uploads</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{user.upvotes}</p>
            <p className="text-xs text-slate-400">Upvotes</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={`px-4 py-2 rounded-lg transition-all ${
              location.pathname === item.path
                ? "bg-indigo-600 font-semibold"
                : "hover:bg-slate-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:flex sticky top-0 h-screen">
        {SidebarContent}
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 md:hidden transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {SidebarContent}
      </aside>
    </>
  );
}

