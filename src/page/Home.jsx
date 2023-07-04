import React, { useEffect } from "react";
import { CoffeeCard } from "../components/CoffeeCard";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { NewsLetter } from "../components/NewsLetter";
import Loader from "../components/loader/Loader";
import Realisation from "../components/Realisation";
import "../index.css";
import Titre from "../components/title/Titre";
import { motion, useScroll } from "framer-motion";

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  getDoc,
} from "firebase/firestore";

import ProjectNumber from "../components/ProjectNumber";
import { db } from "../../firebase";
import { useState } from "react";
import { list } from "firebase/storage";
export const Home = () => {
  const { scrollYProgress } = useScroll();
  const [hero, setHero] = useState([]);
  const [services, setServices] = useState([]);
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    console.log("scroll", scrollYProgress);
  }, [scrollYProgress]);

  useEffect(() => {
    const getTran = async (id) => {
      const q = query(collection(db, "carousels"));
      onSnapshot(q, (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setHero(list);
      });

      onSnapshot(query(collection(db, "services")), (snap) => {
        let serviList = [];
        snap.docs.forEach((doc) => {
          serviList.push({ id: doc.id, ...doc.data() });
        });
        console.log("service", snap);
        setServices(serviList);
      });

      onSnapshot(query(collection(db, "promotions")), (snap) => {
        let promoList = [];
        snap.docs.forEach((doc) => {
          promoList.push({ id: doc.id, ...doc.data() });
        });
        setPromotions(promoList);
      });
    };

    getTran();
  }, []);

  return (
    <div>
      <>
        <div className="">
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Hero rating={4} state={hero} />

          <section className="bg-light-100" id="services">
            <div className="flex items-center flex-col ">
              <Titre titre="Nos Services" />
              <p className="text-light-grey text-sm mb-4">
                Nos Offres et services son diverses et Variés
              </p>
            </div>
            <CoffeeCard state={services} />
          </section>

          <section className=" bg-light-100 ">
            <div className="flex items-center flex-col ">
              <Titre titre="Promotions" />
            </div>
            <div className="p-4 w-full flex justify-between bg-light-100 flex-col-reverse md:flex-row">
              <div className="p-4 ">
                <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl capitalize">
                  {promotions[0]?.titre}
                </h1>
                <p className="text-light-grey text-sm py-4">
                  {promotions[0]?.texte}
                </p>
                <button className="bg-orange text-white p-3 rounded-lg px-4 uppercase my-2 w-full md:w-auto ">
                  Commander
                </button>
              </div>
              <div className="p-6 w-full">
                <img
                  className="w-full h-1/2 md:h-[80%] object-cover rounded-md overflow-hidden"
                  src={promotions[0]?.img}
                  alt="Max Design"
                />
              </div>
            </div>
          </section>

          <NewsLetter />
          <Footer />
        </div>
      </>
    </div>
  );
};
