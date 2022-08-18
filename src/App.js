import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Land from "./pages/public_customer/Land";
import Shops from "./pages/public_customer/Shops";
import Products from "./pages/public_customer/Products";
import AboutUs from "./pages/public_customer/AboutUs";
import FAQ from "./pages/public_customer/FAQ";
import Login from "./pages/public_customer/Login";
import SignUp from "./pages/public_customer/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
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
      </BrowserRouter>
    );
  }
}

export default App;
