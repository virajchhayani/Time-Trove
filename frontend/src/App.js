import React from 'react';
import Navbar from './Components/Navbar/Navbar';  // Make sure the path is correct
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from "./Pages/LoginSignup";
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Company from './Pages/Company';
import About from './Pages/About';
import Offices from './Pages/Offices';
import Products from './Pages/Products';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} /> 
        <Route path="/company" element={<Company />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Offices" element={<Offices/>} />
        <Route path="/Products" element={<Products/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;