// src/components/CartContainer.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const CartContainer = () => {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[100%] p-4 bg-[#F6F6F6] rounded-lg">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div>
        <Cart />
      </div>
      <div className="flex flex-col justify-center items-center mt-8 gap-3">
        <p className="text-2xl font-bold">Total: ${totalAmount}</p>
        <Link to="/payment">
          <button className="font-bold bg-gray-500 px-12 py-3 rounded-2xl text-white">
            Proceed to payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartContainer;
