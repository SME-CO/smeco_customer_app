import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Apps.css";
import Land from "./pages/public_customer/Land";
import Shops from "./pages/public_customer/Shops";
import Products from "./pages/public_customer/Products";
import AboutUs from "./pages/public_customer/AboutUs";
import FAQ from "./pages/public_customer/FAQ";
import Login from "./pages/public_customer/Login";
import SignUp from "./pages/public_customer/SignUp";
import Dashboard from "./pages/registered_customer/Dashboard";
import CustomerShops from "./pages/registered_customer/CustomerShops";
import CustomerProducts from "./pages/registered_customer/CustomerProducts";
import CustomerPurchases from "./pages/registered_customer/CustomerPurchases";
import CustomerRecords from "./pages/registered_customer/CustomerRecords";
import PurchaseHistory from "./pages/registered_customer/PurchaseHistory";
import CustomerChat from "./pages/registered_customer/CustomerChat";
import PurchasedShopCard from "./components/PurchasedShopCard";
import CustomerReview from "./pages/registered_customer/CustomerReviews";
import CustomerAddReview from "./pages/registered_customer/CustomerAddReviews";
import CustomerProfile from "./pages/registered_customer/CustomerProfile";
import CustomerUpdateProfile from "./pages/registered_customer/CustomerUpdateProfile";


import Rewards from "../../smeco_customer_app/src/pages/public_customer/Rewards";
import Discounts from "../../smeco_customer_app/src/pages/public_customer/Discounts";

class App extends Component {
  render() {

    let isLoggedIn = false;

    if(parseInt(window.localStorage.getItem('customerId'))){
      isLoggedIn = true;
    }


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
            <Route path="/Discounts" element={<Discounts />} />
            <Route path="/Rewards" element={<Rewards />} />
          </Routes>

         { isLoggedIn && <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customerShops" element={<CustomerShops />} />
            <Route path="/customerProducts/:merchantId" element={<CustomerProducts />} />
            <Route path="/customerPurchases" element={<CustomerPurchases />} />
            <Route path="/customerRecords" element={<CustomerRecords />} />
            <Route path="/purchaseHistory" element={<PurchaseHistory />} />
            <Route path="/customerChat" element={<CustomerChat />} />
            <Route path="/purchasedShopCard" element={<PurchasedShopCard />} />
            <Route path="/customerReviews" element={<CustomerReview />} />
            <Route path="/customerAddReviews" element={<CustomerAddReview/>}/>
            <Route path="/customerProfile" element={<CustomerProfile/>}/>
            <Route path="/customerUpdateProfile" element={<CustomerUpdateProfile/>}/>
          
          
          </Routes>}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
