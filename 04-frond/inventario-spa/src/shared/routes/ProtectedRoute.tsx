import { Navigate} from "react-router-dom";
import Inicio from "../../feactures/Inicio/Inicio";

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token_bgr");
  return Boolean(token);
};

export default function ProtectedRoute() {
  return isAuthenticated() ? <Inicio /> : <Navigate to="/login" replace />;
}
