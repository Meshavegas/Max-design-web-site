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
import Card from "./SingleCard";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export const CoffeeCard = () => {
  const [state, setState] = useState(null);

  const [screenSize, setScreenSize] = useState(window.screen.width);
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transistion: { duration: 2 },
    },
    hidden: { opacity: 0, scale: 0, y: 200, x: -200 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

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
    <motion.div
      className={`flex gap-3 py-6 items-center justify-${
        !!state?.length ? "between" : "center"
      } mt-6`}
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
              ? 2
              : screenSize <= 1024
              ? 3
              : 3
          }
          navigation={true}
          autoplay={{
            delay: 90500,
            disableOnInteraction: false,
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
    </motion.div>
  );
};
