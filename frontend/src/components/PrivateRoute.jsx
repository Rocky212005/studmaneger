// import { Navigate, Outlet } from "react-router-dom";

// export default function PrivateRoute() {
//   const token = localStorage.getItem("token");

//   // If not logged in, redirect to login
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // If logged in, allow access
//   return <Outlet />;
// }
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

