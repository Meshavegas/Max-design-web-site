import React from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { NewsLetter } from "./components/NewsLetter";
import Loader from "./components/loader/Loader";
import Realisation from "./components/Realisation";
import "./index.css";

function App() {
  return (
    <div className="  ">
      <NavBar />
      <Hero rating={4} />

      <section className="bg-light-100" id="services">
        <div className="flex items-center flex-col ">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl">
            Nos Services
          </h1>
          <p className="text-light-grey text-sm mb-4">
            Nos Offres et services son diverses et Variés
          </p>
        </div>
        <CoffeeCard />
      </section>
      <section className="bg-light-100 z-30" id="realisations">
        <div className="flex items-center flex-col ">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl">
            Réalisations
          </h1>
        </div>
        <div className="flex w-full justify-between pl-24 pr-24 mb-4 md:flex-row flex-col">
          <div className="text-dark-grey text-6xl font-bold text-center">
            <div>Nombre De Clients</div>
            <div className="text-7xl">1000+</div>
          </div>
          <div className="text-dark-grey text-6xl font-bold text-center">
            <div>Nombre De Projet</div>
            <div className="text-7xl">2500+</div>
          </div>
        </div>
        <Realisation />
      </section>

      <section className="flex justify-between bg-light-100 flex-col-reverse md:flex-row">
        <div className="p-4 w-full">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl capitalize">
            Promotions🥳🥳🥳 Commander des maintenant!!
          </h1>
          <p className="text-light-grey text-sm py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto
            sunt voluptatem, ducimus laudantium ut voluptatibus in ullam dolores
            eveniet laboriosam neque consectetur, numquam maiores, deserunt quod
            suscipit? Accusamus, cupiditate?
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
      </section>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
