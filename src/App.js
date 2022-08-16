import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Land from "./components/Land";
import Shops from "./components/Shops";
import Products from "./components/Products";
import AboutUs from "./pages/public_customer/AboutUs";
import FAQ from "./components/FAQ";
// import Navigation from './components/Navigation';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Land />} exact />
            <Route path="/shops" element={<Shops />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
