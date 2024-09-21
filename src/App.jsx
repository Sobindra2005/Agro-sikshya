import Community from "./components/community/community";
import Home from "./components/home";
import Login from "./components/auth/login";
import Header from "./components/menu/header";
import Footer from "./components/menu/footer";
import { BussinessPlanner } from "./components/bussinessplanner";
import Market from "./components/market/market";
import Signup from "./components/auth/signup";
import Setting from "./components/setting/setting";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import User from "./components/user/user";
import Courses from "./components/course/courses";
import Sidebar from "./components/menu/sidebar";
import Player from "./components/course/player";
import { Plan } from "./components/mybussiness/plan";
import { MyBusinessPlan } from "./components/mybussiness/bussinessPlan";

function App() {
  useEffect(() => {
    const key = localStorage.key(0);
    const value = localStorage.getItem(key);
    console.log(value);
  }, []);

  return (
    <>
      <div className="bg-white w-full ">

        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/login" element={<><Header /><Login /> <Footer /></>} />
          <Route path="/signup" element={<><Header /><Signup /> <Footer /></>} />
        </Routes>

      </div>


      <div className="bg-white pl-56">
        <Routes>
          <Route path="/setting" element={<><Sidebar /><Setting /></>} />
          <Route path="/bussinessplan" element={<><Sidebar /><BussinessPlanner /></>} />
          <Route path="/community" element={<><Sidebar /><Community /></>} />
          <Route path="/market" element={<><Sidebar /><Market /></>} />
          <Route path="/courses" element={<><Sidebar /><Courses /></>} />
          <Route path="/courses/player/:id" element={<><Sidebar /><Player /></>} />
          <Route path="/user" element={<><Sidebar /><User /></>} />
          <Route path="/businessDiary" element={<><Sidebar /><MyBusinessPlan /></>} />
          <Route path="/businessDiary/plan" element={<><Sidebar /><Plan /></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;