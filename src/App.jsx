import Community from "./components/community/community";
import Home from "./components/home";
import Login from "./components/auth/login";
import Header from "./components/menu/header";
import Footer from "./components/menu/footer";
import { BussinessPlanner } from "./components/bussinessplanner";
import Signup from "./components/auth/signup";
import Setting from "./components/setting";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/menu/sidebar";

function App() {
  useEffect(() => {
    const key = localStorage.key(0);
    const value = localStorage.getItem(key);
    console.log(value);
  }, []);

  return (
    <>
      <div className="bg-white pl-56">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/bussinessplan" element={<BussinessPlanner />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </div> 
    </>
  );
}

export default App;
