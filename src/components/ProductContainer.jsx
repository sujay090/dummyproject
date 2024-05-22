import React, { useContext } from "react";
import { Card } from "./Card";
import { CartContext } from "../context/CartContext";

const ProductContainer = () => {
  const data = useContext(CartContext);

  // Assuming `cartItems` is the array of products, update your code accordingly
  // console.log(data);
  let arr = [];
  arr = Object.values(data);
  return (
    <div className="flex flex-wrap gap-5 justify-center w-[60%]">
      {arr[4].map((item, i) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
};

export default ProductContainer;
