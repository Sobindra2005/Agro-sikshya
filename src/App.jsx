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
import { useEffect, useState } from "react";
import User from "./components/user/user";
import Sidebar from "./components/menu/sidebar";
import { GetCurrentUser } from "./appwrite/service";
import { BussinessPlan } from "./components/mybussiness/bussinessPlan";
import { Plan } from "./components/mybussiness/plan";
// const key = localStorage.key(0);
// const value = localStorage.getItem(key);

function App() {
  const [AuthenticatedUser, SetAuthenticatedUser] = useState({})

  useEffect(() => {
    const User = GetCurrentUser()
    console.log(User)
    if (!!User) {
      SetAuthenticatedUser(User)
    }
  }, [AuthenticatedUser]);

  return (
    <>

      <div className="bg-white">

        <Routes>
          <Route path="/" element={<><Header /><Home /> <Footer /></>} />
          <Route path="/login" element={<><Header /><Login /> <Footer /></>} />
          <Route path="/signup" element={<><Header /><Signup /> <Footer /></>} />
        </Routes>

      </div>

      <div className="bg-white pl-56">

        <Routes>
          <Route path="/home" element={<> <Sidebar /><Home /></>} />
          <Route path="/bussinessplan" element={<> <Sidebar /><BussinessPlanner /></>} />
          <Route path="/bussinessplan" element={<> <Sidebar /><BussinessPlanner /></>} />
          <Route path="/community" element={<> <Sidebar /><Community /></>} />
          <Route path="/market" element={<> <Sidebar /><Market /></>} />
          <Route path="/setting" element={<> <Sidebar /><Setting /></>} />
          <Route path="/user" element={<> <Sidebar /><User /></>} />
          <Route path="/myBusiness" element={<> <Sidebar />< BussinessPlan /></>} />
          <Route path="/myBusiness/plan" element={<> <Sidebar />< Plan /></>} />

        </Routes>
      </div>

    </>
  );
}

export default App;
