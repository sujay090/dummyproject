// src/App.js
import React from "react";
import { CartProvider } from "./context/CartContext";
import Body from "./components/Body";
import Payment from "./components/Payment";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
