import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";

import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

function App() {
  AOS.init();
  return (
    <div>
      {/* <Dashboard /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
