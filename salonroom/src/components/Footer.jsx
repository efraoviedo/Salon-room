import React from "react";
import polygoncyan from "../assets/polygoncyan.png";

const Footer = () => {
  return (
    <div
      className="w-full h-32 grid justify-center items-center
    bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <p>Hair Saloon Italy</p>
      <img
        src={polygoncyan}
        alt="my profile"
        className="w-8 items-center ml-10 pt-1"
      />

      <p className="flex justify-center items-center">Efranor</p>
    </div>
  );
};

export default Footer;
