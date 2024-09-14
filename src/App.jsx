import Home from "./components/home";
import Login from "./components/login";
import Header from "./components/menu/header";
import Footer from "./components/menu/footer";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <div className="bg-white ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;