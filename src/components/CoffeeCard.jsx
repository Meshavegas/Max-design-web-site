import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { coffees } from "../data/coffee";
import { RatingDisplay } from "./RatingDisplay";

export const CoffeeCard = () => {
  const [state, setState] = useState(null);

  const [screenSize, setScreenSize] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.screen.width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  useEffect(() => {
    setTimeout(() => {
      setState(coffees);
    }, 1000);
  }, []);

  return (
    <div
      className={`flex gap-3 py-6 items-center justify-${
        !!state?.length ? "between" : "center"
      } mt-6`}
    >
      {!!state?.length ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          spaceBetween={10}
          slidesPerView={
            screenSize < 768
              ? 1
              : screenSize >= 768 && screenSize < 1024
              ? 2
              : 3
          }
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {state.map((coffee, index) => (
            <SwiperSlide key={index + coffee?.title}>
              <Card {...coffee} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center font-bold text-orange uppercase">
          Loading...
        </div>
      )}
    </div>
  );
};

const Card = ({ title, image, description, price, rating, reviews }) => {
  return (
    <div className="px-2 py-10 relative w-full bg-light-100">
      <div className="bg-white rounded-xl p-4 flex flex-col px-10">
        <div className="absolute  top-1 left-[50%]">
          <div className="relative w-20 h-20 -left-[50%] ">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain rounded-full"
            />
          </div>
        </div>
        <h1 className="text-dark-grey font-bold text-sm md:text-md lg:text-xl mt-[3rem]">
          {title}
        </h1>
        <p className="text-light-grey text-sm py-4">{description}</p>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <RatingDisplay rating={rating} />
            <p className="text-dark-grey">({reviews}) Reviews</p>
          </div>
          <p className="text-dark-grey">XAF {price}</p>
        </div>
        <div className="flex justify-center my-2">
          <button className="w-full md:w-[50%] bg-orange text-white p-3 rounded-lg px-4 uppercase flex">
            Commander
          </button>
          <button className="w-full md:w-[50%] bg-light text-white ml-3 p-3 rounded-lg px-4 uppercase flex hover:text-black hover:bg-white">
            Voir Plus{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
