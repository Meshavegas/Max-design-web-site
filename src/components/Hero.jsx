import React from "react";
import coffee from "../assets/coffee-one.png";
import { RatingDisplay } from "./RatingDisplay";
import HeroCard from "./HeroCard";

export const Hero = ({ rating }) => {
  return (
    <div className="bg-light pt-0 ">
      <HeroCard />

      {/* <section className="flex flex-col items-center p-4 gap-4 w-full justify-center">
        <div className="flex flex-col p-4 bg-white rounded-xl text-center">
          <p className="text-center w-full">
            <RatingDisplay rating={rating} />
          </p>

          <p className="text-light-grey text-sm text-center">
            {" "}
            {rating} sur un total de 5 étoiles{" "}
          </p>
          <p className="text-light-grey text-sm">
            Evaluation de toutes les entreprises locales
          </p>
        </div>
      </section> */}
    </div>
  );
};
