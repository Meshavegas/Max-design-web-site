import React, { useCallback, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Loader from "./loader/Loader";
const HeroCard = ({ state }) => {
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
    // setTimeout(() => {
    //   setState(images);
    // }, 4000);
  }, []);
  // useCallback(() => {}, []);

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
          spaceBetween={5}
          slidesPerView={
            screenSize < 768
              ? 1
              : screenSize >= 768 && screenSize < 1024
              ? 1
              : screenSize <= 1024
              ? 1
              : 1
          }
          navigation={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
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

const Card = ({ img, id }) => {
  return (
    <div className="w-full   h-full bg-light">
      <img src={img} alt={id} className="w-full" />
      <span className=" bg-light text-light">{"k"}</span>
    </div>
  );
};

export default HeroCard;
