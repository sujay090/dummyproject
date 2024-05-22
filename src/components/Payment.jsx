import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

const Payment = () => {
  const { cartItems } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("CreditCard"); // Default payment method set to "Credit Card"
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    alert("Payment Successful!");
    navigate("/");
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <>
      <Navbar />
      <div className="w-[100%] p-7 flex flex-row-reverse gap-10 ">
        <div className="w-[40%]">
          <CartContainer />
        </div>
        <div className="w-[60%] flex flex-col items-center justify-center h-full">
          <div className="flex justify-center gap-2 mb-4">
            <input
              type="checkbox"
              id="CashOnDelivery"
              checked={paymentMethod === "CashOnDelivery"}
              onChange={() => handlePaymentMethodChange("CashOnDelivery")}
            />
            <label htmlFor="CashOnDelivery" className="text-xl font-bold">
              Cash on Delivery
            </label>
            <input
              type="checkbox"
              id="CreditCard"
              checked={paymentMethod === "CreditCard"}
              onChange={() => handlePaymentMethodChange("CreditCard")}
            />
            <label htmlFor="CreditCard" className="text-xl font-bold">
              Credit Card
            </label>
          </div>
          <form
            onSubmit={handlePayment}
            className={`border flex flex-col w-[60%] gap-8 p-6 rounded-xl shadow-xl ${
              paymentMethod === "CashOnDelivery" ? "" : "hidden"
            }`}
          >
            <div>
              <label className="block font-semibold">Name:</label>
              <input
                className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Phone Number:</label>
              <input
                className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-300 px-7 py-2 rounded-md shadow-lg text-white font-semibold"
            >
              Pay Now
            </button>
          </form>
          <form
            onSubmit={handlePayment}
            className={`border flex flex-col w-[60%] gap-8 p-6 rounded-xl shadow-xl ${
              paymentMethod === "CreditCard" ? "" : "hidden"
            }`}
          >
            {/* Credit Card form fields */}
            <div>
              <label className="block font-semibold">Card Number:</label>
              <input
                className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
                type="text"
                placeholder="Enter card number"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Expiry Date:</label>
              <input
                className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
                type="text"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">CVV:</label>
              <input
                className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
                type="text"
                placeholder="Enter CVV"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-300 px-7 py-2 rounded-md shadow-lg text-white font-semibold"
            >
              Pay Now
            </button>
          </form>
          <button
            className="mt-4 bg-blue-500 px-7 py-2 rounded-md shadow-lg text-white font-semibold"
            onClick={() => navigate("/")}
          >
            Return to Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
