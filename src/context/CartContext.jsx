// src/context/CartContext.js
import React, { createContext, useState } from "react";
import data from "../components/data";

export const CartContext = createContext(data);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = item.quantity + quantity;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Remove items with quantity <= 0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, data }}
    >
      {children}
    </CartContext.Provider>
  );
};
