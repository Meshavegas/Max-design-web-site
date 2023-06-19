import React, { useEffect } from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { NewsLetter } from "./components/NewsLetter";
import Loader from "./components/loader/Loader";
import Realisation from "./components/Realisation";
import "./index.css";
import Titre from "./components/title/Titre";
import { motion, useScroll } from "framer-motion";
import ProjectNumber from "./components/ProjectNumber";

function App() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log("scroll", scrollYProgress);
  }, [scrollYProgress]);
  // console.log("scroll", scrollYProgress);

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="">
        <NavBar />
        <Hero rating={4} />

        <section className="bg-light-100" id="services">
          <div className="flex items-center flex-col ">
            <Titre titre="Nos Services" />
            <p className="text-light-grey text-sm mb-4">
              Nos Offres et services son diverses et Variés
            </p>
          </div>
          <CoffeeCard />
        </section>
        <section className="bg-light-100 z-30" id="realisations">
          <div className="flex items-center flex-col ">
            <Titre titre="Réalisations" />
          </div>
          <div className="flex w-full justify-between pl-2 pr-2 mb-4 md:flex-row flex-col">
            <div className=" md:text-6xl text-3xl font-bold text-center w-full bg-light rounded-xl text-white p-2">
              <div>Nombre De Clients</div>
              <div className="md:text-6xl text-4xl">
                <ProjectNumber number={1800} />
              </div>
            </div>
            <div className="md:mt-0 mt-2 md:ml-2 md:w-full  md:text-6xl text-3xl font-bold text-center w-full bg-orange rounded-xl text-white p-2">
              <div>Nombre De Projet</div>
              <div className="md:text-6xl text-4xl">
                <ProjectNumber number={1800} />
              </div>
            </div>
          </div>
          <Realisation />
        </section>

        <section className=" bg-light-100 ">
          <div className="flex items-center flex-col ">
            <Titre titre="Promotions" />
          </div>
          <div className="p-4 w-full flex justify-between bg-light-100 flex-col-reverse md:flex-row">
            <div className="p-4 ">
              <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl capitalize">
                Promotions🥳🥳🥳 Commander des maintenant!!
              </h1>
              <p className="text-light-grey text-sm py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                iusto sunt voluptatem, ducimus laudantium ut voluptatibus in
                ullam dolores eveniet laboriosam neque consectetur, numquam
                maiores, deserunt quod suscipit? Accusamus, cupiditate?
              </p>
              <button className="bg-orange text-white p-3 rounded-lg px-4 uppercase my-2 w-full md:w-auto ">
                Commander
              </button>
            </div>
            <div className="p-6 w-full">
              <img
                className="w-full h-1/2 md:h-[80%] object-cover rounded-md overflow-hidden"
                src="https://firebasestorage.googleapis.com/v0/b/max-design-cm.appspot.com/o/Impression%2Fmockup-banner.jpg?alt=media&token=940786c8-0562-4031-8028-e2f17f687e17"
                alt="Max Design"
              />
            </div>
          </div>
        </section>

        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default App;
