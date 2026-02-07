// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Dashboard from "./pages/Dashboard";
// // import Upload from "./pages/Upload";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/dashboard" element={<Dashboard />} />
// //         <Route path="/upload" element={<Upload />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import UploadMaterial from "./pages/Upload";
// import PrivateRoute from "./components/PrivateRoute";
// import MyDocuments from "./pages/MyDocuments";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Redirect root */}
//       <Route path="/" element={<Navigate to="/login" replace />} />

//         {/* Public routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected routes */}
//         <Route element={<PrivateRoute />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/upload" element={<UploadMaterial />} />
//           <Route path="/document" element={<MyDocuments/>}/>
//         </Route>

        
//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/login" replace />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadMaterial from "./pages/Upload";
import MyDocuments from "./pages/MyDocuments";
import Account from "./pages/AccountSetting";
import PrivateRoute from "./components/PrivateRoute";
import home from "./pages/Home";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/upload"
        element={
          <PrivateRoute>
            <UploadMaterial />
          </PrivateRoute>
        }
      />

      <Route
        path="/documents"
        element={
          <PrivateRoute>
            <MyDocuments />
          </PrivateRoute>
        }
      />

      <Route
        path="/account"
        element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        }
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
