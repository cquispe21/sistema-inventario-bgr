import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./feactures/Inicio/Inicio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vito" />} />
      <Route path="/vito" element={<Inicio />}>
        {/* <Route path="tareas" element={<TodoListIndex />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
