import React, { useEffect } from "react";
import Slider from "../components/Slider";
import { asideData, benefits, reviews } from "../data/asideData";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AboutShort } from "./About";
import { allItems } from "../data/shopData";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/reducers/cartSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  // Function to get random products
  const getRandomProducts = (items, count) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(allItems, 4); // Select 4 random products

  const handleOrder = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
  };

  return (
    <div className="md:min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto h-fit md:h-screen flex items-center z-10">
        <aside className="w-full h-full">
          <Slider />
        </aside>
      </section>

      {/* Aside Section */}
      <section className="container mx-auto py-16 px-4 md:px-16 bg-backdrop">
        <div className="w-full flex flex-col gap-8 md:flex-row md:gap-12 items-center justify-center">
          {asideData.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 md:h-[40vh] flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold font-chewy text-primary">
                {item.title}
              </h3>
              <p className="text-lg font-light mt-4 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* Button */}
        <Link
          to="/About"
          className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-highlight transition-all text-center items-center justify-center w-36 mx-auto block"
        >
          Discover
        </Link>

        <div className="w-full flex flex-col gap-4 mt-8 items-start justify-center">
          <h3 className="text-xl font-bold font-chewy text-primary text-center mt-8 mb-4">
            what you stand to gain with us...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-start bg-backdrop rounded-lg px-6"
              >
                <h3 className="text-xl font-bold font-chewy text-highlight">
                  {benefit.title}
                </h3>
                <p className="text-lg font-light mt-4 text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto h-fit md:h-screen flex items-center">
        <aside className="w-full h-full bg-gradient-to-r from-secondary to-highlight">
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-2xl md:text-5xl font-bold font-chewy text-primary">
              Try out our Mushroom Microdosing Capsules and Edibles.
            </h3>
            <p className="text-xl md:text-3xl font-light mt-4 md:mt-20 text-backdrop">
              Free of fillers, additives or harmful chemicals. Your journey to
              an Healthy Mind can&nbsp;
              <Link
                to="/Shop"
                className=" text-primary font-light rounded-md hover:text-tertiary hover:underline transition-all text-center items-center justify-center w-36 mx-auto inline"
              >
                Start Now
              </Link>
            </p>
          </div>
        </aside>
      </section>

      <section className="container mx-auto h-fit md:h-screen flex items-center z-10">
        <aside className="w-full h-full bg-backdrop flex flex-col md:flex-row items-start justify-center text-start">
          {/* Title Section */}
          <div className="w-full md:w-1/4 md:h-full items-start justify-center text-start p-2 md:p-8">
            <h3 className="font-poppins px-4 text-xl md:text-2xl font-extrabold text-primary">
              Shop From Us!
            </h3>
          </div>

          {/* Mini-Shop Grid */}
          <div className="w-full md:w-3/4 grid grid-cols-2 gap-4 md:gap-6 p-4">
            {randomProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md h-fit w-full rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={product.image1 || "https://via.placeholder.com/150"}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4
                  className="text-lg font-bold text-primary mb-2 line-clamp-1"
                  title={product.title}
                >
                  {product.title}
                </h4>
                <p className="text-sm font-bold text-dark">
                  ${product.start_price} - ${product.end_price}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-dark px-1 mb-2 hover:text-highlight border-b-2 border-dark hover:border-highlight transition"
                >
                  Details
                </Link>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-highlight text-white px-4 py-2 rounded-lg hover:bg-highlight-dark transition"
                >
                  Order
                </button>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="container mx-auto h-[80vh] lg:h-[83.333vh] flex items-stretch md:items-center">
        <aside className="w-full h-full bg-light flex flex-col md:flex-row items-start justify-center text-start p-8">
          {/* Title Section */}
          <div className="w-full md:w-1/4 md:h-full items-start justify-center text-start p-2 md:p-8">
            <h3 className="font-poppins text-xl md:text-2xl font-extrabold text-primary">
              Our Customers Love Us!
            </h3>
          </div>

          {/* Reviews Slider */}
          <div className="w-full md:w-3/4 h-fit md:h-full flex justify-center p-2 md:p-8">
            <div className="slider w-full items-start">
              <Swiper
                className="w-full h-full"
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
              >
                {reviews.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="w-full h-full flex items-start justify-center bg-cover bg-no-repeat bg-center"
                  >
                    <div className="text-start flex flex-col w-fit mx-auto">
                      <p className="text-xl md:text-3xl font-light  text-secondary">
                        {item.review}
                      </p>
                      <h4 className="text-lg font-bold mt-4 text-primary">
                        {item.name}
                      </h4>
                      <p className="text-sm md:text-xl font-light text-secondary">
                        {item.purchase}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </aside>
      </section>

      <AboutShort />
    </div>
  );
}
