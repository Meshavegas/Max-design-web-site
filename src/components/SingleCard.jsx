import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { RatingDisplay } from "./RatingDisplay";
import { BiMailSend } from "react-icons/bi";
import { ImWhatsapp } from "react-icons/im";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Card = ({
  name,
  img,
  description,
  prix,
  rating,
  reviews,
  lien,
  realLink,
}) => {
  const [screenSize, setScreenSize] = useState(window.screen.width);
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6 },
    },
    hidden: { opacity: 0, scale: 0, y: 200, x: -100 },
  };

  useEffect(() => {
    if (screenSize > 700) {
      console.log(screenSize);
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    } else {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="px-2 py-10 relative w-full bg-light-100 flex flex-row"
      animate={control}
      ref={ref}
      initial="hidden"
      variants={boxVariant}
    >
      <div className="bg-white rounded-xl p-4 flex flex-col px-10">
        <div className="absolute  top-1 left-[50%]">
          <div className="relative w-20 -left-[50%] ">
            <img
              src={img}
              alt={name}
              className="w-full aspect-square object-contain "
            />
          </div>
        </div>
        <h1 className="text-light font-bold text-sm md:text-md lg:text-2xl  mt-[3rem] text-center">
          {name}
        </h1>
        <p className="text-light-grey text-sm py-4">
          <ul>
            {description.map((data, index) => (
              <li
                key={index + data}
                className="ml-3 font-bold flex items-center"
              >
                <div className="w-3 h-3 bg-orange rounded-r-full"></div>
                <div className="ml-2">{data}</div>
              </li>
            ))}
          </ul>
        </p>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <RatingDisplay rating={2} />
            <p className="text-dark-grey">({90}) Reviews</p>
          </div>
          <p className="text-dark-grey">XAF {prix}</p>
        </div>
        <div className="flex justify-center my-2 flex-wrap">
          <Link
            to={`/realisations`}
            className="w-full md:w-[45%] outline hover:outline-2 text-orange p-3 rounded-lg px-4 uppercase flex justify-between"
            target="_blank"
          >
            Voir les realisation <BiMailSend className="w-12 h-12 md:w-12" />
          </Link>
          <a
            href={lien}
            className="w-full mt-3 md:mt-0 md:w-[45%] bg-light text-white  md:ml-3 p-3 rounded-lg px-4 uppercase flex   hover:bg-orange"
            target="_blank"
          >
            Commander par whatsApp
            <ImWhatsapp className="w-12 h-12 md:w-12" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
