import { useAuth } from "./authentification/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    
     <Navigate to="/login" replace />;
  }

  
  return children;
}