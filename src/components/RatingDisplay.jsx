import React from "react";
import { MdStar } from "react-icons/md";

export const RatingDisplay = ({ rating, size = 1 }) => {
  return (
    <div className="flex flex-row text-center justify-center">
      {[...Array(rating)].map((_, index) => (
        <MdStar
          key={index}
          className={`text-orange font-bold text-${size}xl`}
        />
      ))}
    </div>
  );
};
