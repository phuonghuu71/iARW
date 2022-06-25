import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";

import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

function App() {
  AOS.init();

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div>
      {/* <Dashboard /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={user ? <Dashboard /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
