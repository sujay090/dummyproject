// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateItemQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="shadow-xl mt-2 rounded-md overflow-hidden px-3 flex gap-8 bg-blue-100 items-center p-2 justify-between"
        >
          <div className="flex items-center gap-8">
            <img className="w-[100px]" src={item.imageURL} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateItemQuantity(item.id, -1)}
              className="bg-red-500 px-4 rounded-md py-2 text-white font-bold text-2xl"
            >
              -
            </button>
            <p className="text-xl font-semibold">{item.quantity}</p>
            <button
              onClick={() => updateItemQuantity(item.id, 1)}
              className="bg-green-500 px-4 rounded-md py-2 text-white font-bold text-2xl"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;




