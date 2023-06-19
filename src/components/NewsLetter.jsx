import React from "react";
import coffeeFour from "../assets/coffee-four.png";

export const NewsLetter = () => {
  return (
    <div
      className="flex items-start gap-2 p-4 bg-white flex-col md:flex-row"
      id="contact"
    >
      <div className="hidden md:block p-4 w-full   ">
        <img
          className="m-auto md:h-[100%] object-cover rounded-md overflow-hidden"
          src="https://firebasestorage.googleapis.com/v0/b/max-design-cm.appspot.com/o/Impression%2FFB_IMG_1663146077038.jpg?alt=media&token=acaa8d35-023b-4fb0-a3e0-8552ede2f0ba"
          alt="A cup of coffee image"
        />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="w-full md:w-[80%]">
          <h1 className="text-dark-grey font-bold text-xl md:text-2xl lg:text-3xl mt-[3rem]">
            Nous contacter pas mail
          </h1>
          <p className="text-light-grey text-sm py-4">
            Tout belle histoire commence pas un petit message.
          </p>
          <input
            placeholder="Entez votre nom"
            type="text"
            className="form-input px-4 mb-3 py-3 rounded-xl w-full border-2  border-orange focus:border-none focus:outline-light"
          />
          <input
            placeholder="Entez votre adresse mail"
            type="text"
            className="form-input px-4 py-3 rounded-xl w-full border-2  border-orange focus:border-none focus:outline-light"
          />
          <textarea
            placeholder="Entez votre message"
            type="text"
            className="mt-3 form-input px-4 py-3 rounded-xl w-full border-2  border-orange focus:border-none focus:outline-light"
          />

          <button className="bg-orange text-white p-3 rounded-xl px-4 uppercase w-full mt-4">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};
