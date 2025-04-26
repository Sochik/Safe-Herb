import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addToCart } from "../features/reducers/cartSlice"; // Import addToCart action

export default function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || []; // Get the search results from state
  const dispatch = useDispatch(); // Initialize dispatch

  return (
    <section className="container mx-auto py-16 px-4 md:px-16 bg-backdrop rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Search Results
      </h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={item.image1 || "https://via.placeholder.com/150"}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h2>
              <p className="text-dark font-bold">
                Price: ${item.start_price} - ${item.end_price}
              </p>
              <Link
                to={`/product/${item.id}`}
                className="text-dark px-1 mt-2 hover:text-highlight border-b-2 border-dark hover:border-highlight transition"
              >
                Details
              </Link>
              <button
                onClick={() => dispatch(addToCart(item))} // Dispatch addToCart action
                className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-highlight-dark transition mt-2"
              >
                Order
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">
          No products match your search query.
        </p>
      )}
    </section>
  );
}