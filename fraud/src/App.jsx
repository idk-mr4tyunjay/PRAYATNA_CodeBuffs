import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainUI from "./components/UI/MainUI/MainUI";
import Layout from "./components/UI/Layout/Layout";
import Settings from "./components/UI/MainUI/Nav/Settings";
import Services from "./components/UI/MainUI/Nav/Services";
import Factor from "./components/UI/MainUI/Nav/Factor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/mainui" element={<MainUI />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/services" element={<Services />} />
      <Route path="/factors" element={<Factor />} />
    </Routes>
  );
}

export default App;
