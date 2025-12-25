import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./feactures/Inicio/Inicio";
import ProductosIndex from "./feactures/Productos/ProductosIndex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/bgr" />} />
      <Route path="/bgr" element={<Inicio />}>
        <Route path="productos" element={<ProductosIndex />} />
      </Route>
    </Routes>
  );
}

export default App;
