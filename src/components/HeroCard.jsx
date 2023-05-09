import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { images } from "../data/images";
import Loader from "./loader/Loader";
const HeroCard = () => {
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
      setState(images);
    }, 1000);
  }, []);

  return (
    <div
      className={`flex items-center p-2 justify-${
        !!state?.length ? "between" : "center"
      }  `}
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
              ? 1
              : 1
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
            <SwiperSlide key={index + coffee?.id}>
              <Card {...coffee} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const Card = ({ url, id, price, rating, reviews }) => {
  return (
    <div className="relative w-full  screen h-full bg-light-100">
      <img src={url} alt={id} className="w-full" />
      {/* <h1 className="md:text-center absolute h-28 lg:bottom-1/2 mx-1 text-2xl font-bold bg-light opacity-80 text-white align-middle flex justify-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quam,
        nam aspernatur veritatis fuga deleniti exercitationem animi aliquam
        similique obcaecati.
      </h1> */}
    </div>
  );
};

export default HeroCard;
