import Home from "./components/home";
import Login from "./components/auth/login";
import Header from "./components/menu/header";
import Footer from "./components/menu/footer";
import Signup from "./components/auth/signup";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    
      const key = localStorage.key(0)
      const value = localStorage.getItem(key);
  console.log(value)
  }, []);

  return (
    <>
      <div className="bg-white ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
