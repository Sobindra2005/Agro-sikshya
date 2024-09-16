import Home from "./components/home";
import Login from "./components/auth/login";
import Header from "./components/menu/header";
import Footer from "./components/menu/footer";
import { BussinessPlanner } from "./components/bussinessplanner";
import Signup from "./components/auth/signup";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const key = localStorage.key(0);
    const value = localStorage.getItem(key);
    console.log(value);
  }, []);

  return (
    <>
      <div className="bg-white ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {" "}
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <Signup />
              </>
            }
          />
          <Route path="/bussinessplannner" element={<BussinessPlanner />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
