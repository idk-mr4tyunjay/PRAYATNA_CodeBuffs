import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainUI from "./components/UI/MainUI/MainUI";
import Layout from "./components/UI/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<MainUI />} />
    </Routes>
  );
}

export default App;
