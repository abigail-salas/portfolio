import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "../node_modules/primeflex/primeflex.css";
import "./utils/iconLibrary.js";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
