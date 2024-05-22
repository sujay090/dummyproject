import React from "react";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-6 px-6">
        <ProductContainer />
        <div className="w-[40%]">
          <CartContainer />
        </div>
      </div>
    </>
  );
};

export default Body;
