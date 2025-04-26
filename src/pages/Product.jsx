import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { allItems } from "../data/shopData";
import { shop } from "../assets/images";
import { addToCart } from "../features/reducers/cartSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

export default function Product() {
  const dispatch = useDispatch(); // Access dispatch
  const { id } = useParams(); // Get the product ID from the URL
  const product = allItems.find((item) => item.id === id); // Find the product by ID
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  // Collect all available images for the product
  const productImages = [
    product.image1,
    product.image2,
    product.image3,
    product.image4,
  ].filter(Boolean); // Filter out undefined or null images

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container mx-auto px-4 py-8 bg-light rounded-lg shadow-lg">
      <div className="w-full h-[60vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={shop}
          alt="Shop"
          aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <h1 className="text-3xl font-bold text-center my-5 text-primary">
        {product.title}
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Product Image Slider */}
        <div className="relative w-[70%] md:w-[50%] lg:w-[40%]"> {/* Adjust width for medium and large screens */}
          {productImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-dark p-2 rounded-full shadow-md hover:bg-highlight hover:text-white transition"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-dark p-2 rounded-full shadow-md hover:bg-highlight hover:text-white transition"
              >
                <FaArrowRight size={20} />
              </button>
            </>
          )}
          <div className="h-[40vh] md:h-[60vh] overflow-hidden rounded-lg shadow-md">
            <img
            src={productImages[currentImageIndex]}
            alt={`${product.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          </div>
          
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <p className="text-lg text-dark">{product.description}</p>
          <p className="text-lg text-primary font-bold">
            Price: ${product.start_price} - ${product.end_price}
          </p>
          <button
            onClick={() => dispatch(addToCart(product))} // Dispatch addToCart action
            className="bg-highlight w-fit text-white px-4 py-2 rounded-lg hover:bg-highlight-dark transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}