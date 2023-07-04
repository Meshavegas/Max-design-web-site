import React from "react";
import coffee from "../assets/coffee-one.png";
import { RatingDisplay } from "./RatingDisplay";
import HeroCard from "./HeroCard";

export const Hero = ({ rating, state }) => {
  return (
    <div className="bg-light pt-0 ">
      <HeroCard state={state} />
    </div>
  );
};
