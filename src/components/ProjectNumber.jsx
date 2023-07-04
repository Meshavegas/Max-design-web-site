import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProjectNumber = ({ number }) => {
  const count = useMotionValue(100);
  const rounded = useTransform(count, Math.round);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      const animation = animate(count, number, { duration: 15 });
      return animation.stop;
    } else {
      const animation = animate(count, number, { duration: 15 });
      return animation.stop;
    }
  }, [inView]);
  return <motion.div ref={ref}>{rounded}</motion.div>;
};

export default ProjectNumber;
