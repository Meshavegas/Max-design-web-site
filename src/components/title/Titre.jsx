import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
const Titre = ({ titre }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [screenSize, setScreenSize] = useState(window.screen.width);

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3 },
    },
    hidden: { opacity: 1, scale: 0, y: 200, x: -200 },
  };

  useEffect(() => {
    if (screenSize > 700) {
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
      className="box"
      animate={control}
      ref={ref}
      initial="hidden"
      variants={boxVariant}
    >
      <h1 className="text-dark-grey font-bold text-4xl  py-3 md:text-6xl">
        {titre}
      </h1>
    </motion.div>
  );
};

export default Titre;
