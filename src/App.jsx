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
import Courses from "./components/course/courses";
import Sidebar from "./components/menu/sidebar";
import Player from "./components/course/player";
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/bussinessplan" element={<BussinessPlanner />} />
          <Route path="/community" element={<Community />} />
          <Route path="/market" element={<Market />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/player/:id" element={<Player />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
