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

import Region from "./components/regional-crops/region";

function App() {
  // useEffect(() => {
  
  //   console.log(value);
  // }, []);

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
        <Header />
        <Sidebar />
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/bussinessplan" element={<BussinessPlanner />} />
          <Route path="/community" element={<Community />} />
          <Route path="/market" element={<Market />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/regional-crops" element={<Region />} />
          <Route path="/courses/player/:id" element={<Player />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;