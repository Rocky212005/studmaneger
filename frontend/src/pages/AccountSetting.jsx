// // import { useState } from "react";

// // export default function AccountSettings() {
// //   const storedUser = JSON.parse(localStorage.getItem("user"));

// //   const [formData, setFormData] = useState({
// //     name: storedUser?.name || "",
// //     email: storedUser?.email || "",
// //     course: storedUser?.course || "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSave = (e) => {
// //     e.preventDefault();

// //     // TEMP: frontend only
// //     localStorage.setItem(
// //       "user",
// //       JSON.stringify({ ...storedUser, ...formData })
// //     );

// //     alert("Profile updated successfully ✅");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
// //       <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden">

// //         {/* Header */}
// //         <div className="bg-indigo-600 px-6 py-6 text-white">
// //           <h1 className="text-2xl font-bold">Account Settings</h1>
// //           <p className="text-indigo-100 text-sm">
// //             Manage your personal information
// //           </p>
// //         </div>

// //         {/* Profile Section */}
// //         <div className="p-6">
// //           <div className="flex items-center gap-6 mb-8">
// //             <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-3xl font-bold">
// //               {formData.name.charAt(0)}
// //             </div>

// //             <div>
// //               <h2 className="text-xl font-semibold">{formData.name}</h2>
// //               <p className="text-gray-500">{formData.email}</p>
// //               <p className="text-sm text-gray-400">
// //                 {formData.course || "Course not set"}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Form */}
// //           <form onSubmit={handleSave} className="space-y-5">
// //             <div>
// //               <label className="block text-sm font-medium mb-1">
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
// //               />
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-1">
// //                 Email Address
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 disabled
// //                 value={formData.email}
// //                 className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
// //               />
// //               <p className="text-xs text-gray-400 mt-1">
// //                 Email cannot be changed
// //               </p>
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium mb-1">
// //                 Course
// //               </label>
// //               <input
// //                 type="text"
// //                 name="course"
// //                 value={formData.course}
// //                 onChange={handleChange}
// //                 placeholder="e.g. B.Tech CSE"
// //                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
// //               />
// //             </div>

// //             {/* Actions */}
// //             <div className="flex justify-end gap-4 pt-6 border-t">
// //               <button
// //                 type="reset"
// //                 className="px-5 py-2 rounded-lg border hover:bg-gray-100"
// //               >
// //                 Cancel
// //               </button>

// //               <button
// //                 type="submit"
// //                 className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
// //               >
// //                 Save Changes
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import axios from "axios";

// export default function AccountSettings() {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const token = localStorage.getItem("token");

//   const [formData, setFormData] = useState({
//     name: storedUser?.name || "",
//     email: storedUser?.email || "",
//     course: storedUser?.course || "",
//   });

//   const [avatarFile, setAvatarFile] = useState(null);
//   const [avatarPreview, setAvatarPreview] = useState(
//     storedUser?.avatar
//       ? `http://localhost:5000/${storedUser.avatar}`
//       : ""
//   );

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   /* ================= PROFILE SAVE ================= */
//   const handleSave = async (e) => {
//     e.preventDefault();

//     // TEMP: frontend-only update
//     const updatedUser = { ...storedUser, ...formData };
//     localStorage.setItem("user", JSON.stringify(updatedUser));

//     alert("Profile updated successfully ✅");
//   };

//   /* ================= AVATAR UPLOAD ================= */
//   const handleAvatarUpload = async () => {
//     if (!avatarFile) return alert("Please select an image");

//     const formData = new FormData();
//     formData.append("avatar", avatarFile);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/users/avatar",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const updatedUser = {
//         ...storedUser,
//         avatar: res.data.avatar,
//       };

//       localStorage.setItem("user", JSON.stringify(updatedUser));
//       setAvatarPreview(`http://localhost:5000/${res.data.avatar}`);

//       alert("Profile photo updated ✅");
//     } catch (err) {
//       console.error(err);
//       alert("Avatar upload failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
//       <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden">

//         {/* Header */}
//         <div className="bg-indigo-600 px-6 py-6 text-white">
//           <h1 className="text-2xl font-bold">Account Settings</h1>
//           <p className="text-indigo-100 text-sm">
//             Manage your personal information
//           </p>
//         </div>

//         <div className="p-6">

//           {/* PROFILE SECTION */}
//           <div className="flex items-center gap-6 mb-8">
//             <img
//               src={
//                 avatarPreview ||
//                 "https://i.pravatar.cc/150"
//               }
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border"
//             />

//             <div>
//               <h2 className="text-xl font-semibold">{formData.name}</h2>
//               <p className="text-gray-500">{formData.email}</p>
//               <p className="text-sm text-gray-400">
//                 {formData.course || "Course not set"}
//               </p>

//               <div className="flex gap-3 mt-3">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => {
//                     setAvatarFile(e.target.files[0]);
//                     setAvatarPreview(
//                       URL.createObjectURL(e.target.files[0])
//                     );
//                   }}
//                   className="text-sm"
//                 />

//                 <button
//                   onClick={handleAvatarUpload}
//                   className="px-4 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
//                 >
//                   Upload Photo
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* FORM */}
//           <form onSubmit={handleSave} className="space-y-5">

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 disabled
//                 value={formData.email}
//                 className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
//               />
//               <p className="text-xs text-gray-400 mt-1">
//                 Email cannot be changed
//               </p>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Course
//               </label>
//               <input
//                 type="text"
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 placeholder="e.g. B.Tech CSE"
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
//               />
//             </div>

//             {/* ACTIONS */}
//             <div className="flex justify-end gap-4 pt-6 border-t">
//               <button
//                 type="reset"
//                 className="px-5 py-2 rounded-lg border hover:bg-gray-100"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";

export default function AccountSettings() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    course: storedUser?.course || "",
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(
    storedUser?.avatar
      ? `http://localhost:5000/${storedUser.avatar}`
      : ""
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ ...storedUser, ...formData })
    );
    alert("Profile updated successfully ✅");
  };

  const handleAvatarUpload = async () => {
    if (!avatarFile) return alert("Please select an image");

    const data = new FormData();
    data.append("avatar", avatarFile);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/avatar",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedUser = { ...storedUser, avatar: res.data.avatar };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setAvatarPreview(`http://localhost:5000/${res.data.avatar}`);

      alert("Profile photo updated ✅");
    } catch (err) {
      alert("Avatar upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-6 sm:py-10">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-indigo-600 px-6 py-5 text-white">
          <h1 className="text-xl sm:text-2xl font-bold">Account Settings</h1>
          <p className="text-indigo-100 text-sm">
            Manage your personal information
          </p>
        </div>

        <div className="p-5 sm:p-6">

          {/* PROFILE SECTION */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">

            {/* Avatar */}
            <div className="flex justify-center sm:justify-start">
              <img
                src={avatarPreview || "https://i.pravatar.cc/150"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold">
                {formData.name}
              </h2>
              <p className="text-gray-500">{formData.email}</p>
              <p className="text-sm text-gray-400">
                {formData.course || "Course not set"}
              </p>

              {/* Upload */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setAvatarFile(e.target.files[0]);
                    setAvatarPreview(
                      URL.createObjectURL(e.target.files[0])
                    );
                  }}
                  className="text-sm"
                />

                <button
                  onClick={handleAvatarUpload}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 w-full sm:w-auto"
                >
                  Upload Photo
                </button>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSave} className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                disabled
                value={formData.email}
                className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
              />
              <p className="text-xs text-gray-400 mt-1">
                Email cannot be changed
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g. B.Tech CSE"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
              <button
                type="reset"
                className="px-5 py-2 rounded-lg border hover:bg-gray-100 w-full sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 w-full sm:w-auto"
              >
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
