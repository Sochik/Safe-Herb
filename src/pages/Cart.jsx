import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, changeInCart } from "../features/reducers/cartSlice";
import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Cart() {
  const cart = useSelector((state) => state.cart); // Get cart state from Redux
  const dispatch = useDispatch();

  const subtotal = cart.reduce((total, item) => total + item.start_price * item.qty, 0);
  const discount = subtotal * 0.1;
  const grandTotal = subtotal - discount;

  if (cart.length === 0) {
    return (
      <main className="relative py-20 min-h-[70vh]">
        <section className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Your Cart</h1>
          <p className="text-lg text-dark">Your cart is empty.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="relative bg-light md:before:absolute md:before:h-60 md:before:w-2/3 md:before:bg-primary md:before:-top-32 md:before:-right-72 before:-rotate-45 before:rounded-full py-20 min-h-[70vh]">
      <section className="container mx-auto">
        <div className="bg-white shadow-md rounded-md p-4 max-w-screen-md mx-auto relative">
          <div className="flex items-center gap-4 justify-between">
            <h3 className="text-2xl md:text-4xl font-bold text-primary">
              Safe Herb <span className="text-secondary">Cart</span>
            </h3>
            <div className="h-8 w-8 text-secondary hover:text-dark cursor-pointer flex justify-center items-center text-lg relative md:scale-125 -translate-x-1">
              <HiOutlineShoppingCart />
              <div className="absolute h-4 w-4 grid place-items-center text-white bg-secondary rounded-full -top-0.5 -right-0.5 text-xs">
                {cart.length}
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 divide-y divide-slate-200">
            {cart.map((item, index) => (
              <aside key={item.id} className="p-2 flex items-center gap-2 justify-between relative">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="h-5 w-5 text-lg grid place-items-center bg-slate-100 text-primary cursor-pointer absolute -top-2 -right-1 rounded-full"
                >
                  X
                </button>
                <div className="flex gap-2 items-center flex-1">
                  <img
                    src={item.image1 || "https://via.placeholder.com/150"}
                    alt={item.title}
                    className="h-12 w-12 md:h-16 md:w-16 rounded-md object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col text-secondary">
                    <h4 className="text-lg md:text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm md:text-base opacity-70 font-medium">
                      ${item.start_price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={(e) =>
                    dispatch(changeInCart({ id: item.id, qty: parseInt(e.target.value) || 1 }))
                  }
                  className="border border-slate-200 rounded-md w-10 h-8 text-center"
                />
              </aside>
            ))}
          </div>
          <div className="flex flex-col border-t border-secondary/20 border-solid divide-y divide-slate-200 text-secondary py-2">
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Subtotal:</p>
              <p className="font-semibold">${subtotal.toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Discount Applied (10%):</p>
              <p className="font-semibold text-primary">(-${discount.toLocaleString()})</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Grand Total:</p>
              <p className="text-base md:text-lg font-bold">${grandTotal.toLocaleString()}</p>
            </div>
            <button className="bg-secondary hover:bg-primary text-white text-base md:text-lg rounded-md flex justify-center items-center gap-2 mt-2 p-2">
              <IoWalletOutline /> Proceed to Checkout
            </button>
            <p className="opacity-60 text-xs text-center pt-1">
              100% Secure Payment. No card details Needed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}