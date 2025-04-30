import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { HeroSlider1, HeroSlider2, HeroSlider3 } from "../assets/images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Slider() {
  const images = [
    {
      id: 1,
      image: HeroSlider1,
      title: (
        <div className=" z-10 bg-dark p-4 bg-opacity-20 rounded-3xl text-center">
          <h2 className="text-secondary font-extrabold text-xl md:text-5xl">
            Mushroom Supplements
          </h2>
          <p className="text-highlight font-bold font-poppins text-lg md:text-4xl">
            that can{" "}
            <span className="block animate-blink font-poppins text-2xl md:text-6xl font-extrabold">
              CHANGE YOUR LIFE!
            </span>
          </p>
          <Link
            to="/Shop"
            className="mt-3 px-3 md:px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-highlight transition-all text-center items-center justify-center mx-auto block w-fit"
          >
            Order Now
          </Link>
        </div>
      ),
    },
    {
      id: 2,
      image: HeroSlider2,
      title: (
        <div className="z-10 mx-4 md:w-1/2 bg-dark p-4 rounded-3xl w-fit bg-opacity-50">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-tertiary font-bold text-2xl md:text-4xl">
              Have you tried Mushroom Edibles?
            </h2>
            <p className="text-light text-lg md:text-2xl mt-4">
              Try out our mushroom chocolate bars and coffee blends to
              experience the benefits of mushrooms in a delicious way.
            </p>
            <Link
              to="/Shop"
              className="mt-3 px-3 md:px-6 py-2 bg-tertiary text-primary font-bold rounded-md hover:bg-highlight transition-all text-center items-center justify-center mx-auto block w-fit"
            >
              Order Now
            </Link>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      image: HeroSlider3,
      title: (
        <div className="z-10 mx-auto md:w-3/4 bg-dark p-4 rounded-3xl w-fit bg-opacity-30">
          <h2 className="text-light font-bold text-2xl md:text-5xl p-4 rounded-md">
            Select from a vast range of alternative remedies
          </h2>
          <Link
            to="/Services"
            className="mt-3 px-3 md:px-6 py-2 bg-tertiary bg-opacity-80 md:bg-opacity-100 text-primary font-bold rounded-md hover:bg-highlight transition-all text-center items-center justify-center mx-auto block w-fit"
          >
            Learn More
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="slider">
      <Swiper
        className="w-full h-[60vh] md:h-screen"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {images.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full h-full flex items-center justify-center bg-cover bg-no-repeat bg-center z-10"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="text-center w-fit mx-auto my-[26.5%] md:my-[18.5%]">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
