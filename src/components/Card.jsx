// src/components/Card.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Card = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({ ...data, quantity: 1 });
  };

  return (
    <div className="w-[230px] flex flex-col items-center rounded-lg p-5 gap-2 shadow-xl">
      <img src={data.imageURL} alt="" />
      <p>{data.name}</p>
      <p>Price: ${data.price}</p>
      <button
        onClick={handleAddToCart}
        className="px-6 py-2 bg-[#fff12345] rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};
