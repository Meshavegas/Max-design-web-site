import React from "react";
import ProjectNumber from "../components/ProjectNumber";
import Realisation from "../components/Realisation";
import Titre from "../components/title/Titre";
import ScrollToHashElement from "../components/scrollTo";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import { useEffect } from "react";
import "core-js/actual";
const RealisationPage = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getRealistion = async () => {
      onSnapshot(query(collection(db, "realisations")), (snap) => {
        let serviList = [];
        snap.docs.forEach((doc) => {
          serviList.push({ id: doc.id, ...doc.data() });
        });
        var result = serviList.reduce((x, y) => {
          (x[y.service] = x[y.service] || []).push(y);

          return x;
        }, {});
        // const list = serviList.group(({ service }) => service);

        setImage(result);
      });
    };
    getRealistion();
  }, []);

  return (
    <div className="text-4xl">
      <ScrollToHashElement />{" "}
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
        <Realisation imagesCards={image} />
      </section>
    </div>
  );
};

export default RealisationPage;
