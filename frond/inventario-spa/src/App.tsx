import {  Routes, Route } from "react-router-dom";
import ProtectedRoute from "./shared/routes/ProtectedRoute";
import LoginIndex from "./feactures/Login/LoginIndex";
import ProductosIndex from "./feactures/Productos/ProductosIndex";
import TransaccionIndex from "./feactures/Transacciones/TransaccionIndex";
import "./App.css";

export default function App() {
  return (
      <Routes>
      
        <Route path="/login" element={<LoginIndex />} />

        <Route path="*" element={<LoginIndex />} />
     
        <Route element={<ProtectedRoute />}>
          
          <Route path="/productos" element={<ProductosIndex />} />
          <Route path="/transacciones" element={<TransaccionIndex />} />
        </Route>
      </Routes>
  );
}
