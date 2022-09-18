import {  Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import Login from "../pages/Login";

function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default PageRoutes;
