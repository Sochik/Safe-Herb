import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.start_price * item.qty,
    0
  );
  const discount = subtotal * 0.1; // 10% discount
  const grandTotal = subtotal - discount;

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    // Proceed with checkout logic (checking Bugs)
    console.log("Checkout successful with payment method:", paymentMethod);
  };

  return (
    <section className="container mx-auto py-8 px-4 md:px-16 bg-light rounded-lg shadow-lg">
      <h1 className="text-3xl mt-10 font-bold text-center text-primary mb-6">
        Checkout
      </h1>
      {cart.length > 0 ? (
        <div className="md:w-3/6 mx-auto bg-white shadow-md rounded-lg p-6">
          {/* Cart Items */}
          <div className="mb-6 mx-auto ">
            <h2 className="text-xl font-bold px-4 pb-4 border-b border-slate-300 text-dark">
              Your Cart
            </h2>
            <div className="flex flex-col divide-y divide-slate-300">
              {cart.map((item) => (
                <div key={item.id} className="p-4 flex flex-col items-start">
                  <h2 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h2>
                  <p className="text-dark font-bold mb-2">
                    Price: ${item.start_price} x {item.qty}
                  </p>
                  <p className="text-dark font-bold">
                    Total: ${(item.start_price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-dark mb-4">
              Select Payment Method
            </h2>
            <div className="flex flex-col gap-4">
              {["Crypto (USDT)", "PayPal", "Venmo", "CashApp", "ApplePay"].map(
                (method, index) => (
                  <label
                    key={method}
                    className={`relative flex items-center gap-2 p-4 border rounded-lg cursor-pointer ${
                      paymentMethod === method
                        ? "border-highlight bg-highlight-light"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => handlePaymentSelection(method)}
                      className="cursor-pointer"
                    />
                    <span className="text-dark font-bold">{method}</span>
                    {/* Add a green "Fast" box for the first item */}
                    {index === 0 && (
                      <span className=" bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Fast
                      </span>
                    )}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Summary and Checkout */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold text-dark mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-secondary">Subtotal:</p>
              <p className="text-secondary font-bold">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-secondary">Discount (10%):</p>
              <p className="text-secondary font-bold">-${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-secondary">Grand Total:</p>
              <p className="text-primary text-lg font-bold">${grandTotal.toFixed(2)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-secondary text-white px-4 py-2 rounded-lg hover:bg-highlight-dark transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">
          Your cart is empty.{" "}
          <Link to="/shop" className="text-highlight">
            Go to Shop
          </Link>
        </p>
      )}
    </section>
  );
}
