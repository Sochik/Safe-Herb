import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { allItems, pills, kits, naturalSupplement } from "../data/shopData";
import { shop } from "../assets/images";
import { addToCart } from "../features/reducers/cartSlice";

export default function Shop() {
  const dispatch = useDispatch(); // Access dispatch

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(allItems);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "Natural Supplements":
        setFilteredItems(naturalSupplement);
        break;
      case "Pills":
        setFilteredItems(pills);
        break;
      case "Grow Kit":
        setFilteredItems(kits);
        break;
      default:
        setFilteredItems(allItems);
    }
  };

  return (
    <section className="container relative mx-auto py-8 bg-light rounded-lg shadow-lg">
      <div className="w-full h-[60vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={shop}
          alt="Shop"
          aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <div className="flex flex-col justify-center px-4 gap-4 sticky top-14 mb-8 bg-transparent backdrop-blur-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center md:my-4 text-primary">
          Shop
        </h1>
        {/* Navigation Bar */}
        <div className="flex justify-center gap-4 sticky top-14 mb-8">
          {["All", "Natural Supplements", "Pills", "Grow Kit"].map(
            (category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-highlight text-white"
                    : "bg-gray-200 text-dark hover:bg-highlight hover:text-white"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {filteredItems.map((item) => {
          const randomImage =
            item.image1 ||
            item.image2 ||
            item.image3 ||
            item.image4 ||
            "https://via.placeholder.com/150"; // Fallback image

          return (
            <div
              key={item.id}
              className="bg-backdrop p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={randomImage}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-bold text-primary mb-2 line-clamp-1">
                {item.title}
              </h2>
              <p className="text-dark font-bold">
                Price: ${item.start_price} - ${item.end_price}
              </p>
              <Link
                to={`/product/${item.id}`}
                className="text-dark px-1 mb-2 hover:text-highlight border-b-2 border-dark hover:border-highlight transition"
              >
                Details
              </Link>
              <button
                onClick={() => dispatch(addToCart(item))} // Dispatch addToCart action
                className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-highlight-dark transition"
              >
                Order
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
