import React, { useState } from "react";
import { BsCart3, BsSuitHeart, BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "#services" },
  { name: "Réalisations", to: "#realisations" },
  { name: "Partenaires", to: "#partenaires" },
  { name: "Contacts", to: "#contact" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const currentRoute = window.location.pathname;

  return (
    <div className="sticky top-0 w-full bg-light h-[80px] z-50">
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="flex items-center text-lg font-bold underline underline-offset-8 text-white">
          <a href="/" className="bg-white">
            <img src={logo} alt="logo" className="h-20 w-24" />
          </a>
        </h1>
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map(({ name, to }) => (
            <li
              key={name + to}
              className={`hover:text-orange text-${
                currentRoute === to ? "orange" : "white"
              }`}
            >
              <a href={to}>{name}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-white hover:text-black focus:outline-none">
            <a
              href="https://wa.me/237677899380?text=Bonjour+*max+Design*+depuis+votre+site"
              className="flex"
              target="_blank"
            >
              Contacter
              <BsCart3 />
            </a>
          </div>
          <div className="rounded"></div>
        </div>

        <div className=" pr-2 md:hidden">
          {isOpen ? (
            <MdOutlineClose
              className="text-white font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          ) : (
            <FiMenu
              className="text-white font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="bg-light p-4 z-50 absolute w-full md:hidden  ">
          <ul className=" flex flex-col items-start gap-4">
            {navLinks.map(({ name, to }) => (
              <li
                key={name + to}
                className={`hover:text-orange text-${
                  currentRoute === to ? "orange" : "white"
                }`}
              >
                <a href={to}>{name}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:hidden flex items-center justify-between gap-6">
            <div className="flex items-center   text-white text-xl bg-orange p-3 rounded-full hover:bg-white hover:text-black focus:outline-none">
              <a
                href="https://wa.me/237677899380?text=Bonjour+*max+Design*+depuis+votre+site"
                target="_blank"
                className="flex"
              >
                Contacter
                <BsCart3 />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
