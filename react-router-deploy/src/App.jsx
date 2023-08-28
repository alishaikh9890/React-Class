import "./styles.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<UserDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
        {/* on which path ?? I should who which element ??  */}
      </Routes>
    </div>
  );
}
