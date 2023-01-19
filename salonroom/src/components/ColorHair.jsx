import React from "react";
import pinkhair from "../assets/sweetFifteen/pinkhair.jpg";
import rubia3 from "../assets/sweetFifteen/rubia3.jpg";
import redhair from "../assets/sweetFifteen/redhair.jpg";
import rubia4 from "../assets/sweetFifteen/rubia4.jpg";
import niña16 from "../assets/sweetFifteen/niña16.png";
import rubia1 from "../assets/sweetFifteen/rubia1.jpg";

const ColorHair = () => {
  function handleClick(event) {
    event.target.requestFullscreen();
  }

  const techs = [
    {
      id: 1,
      src: pinkhair,
      title: "Pink hair",
      style: "drop-shadow-xl",
    },
    {
      id: 2,
      src: rubia3,
      title: "Child on Blond",
      style: "drop-shadow-xl",
    },
    {
      id: 3,
      src: redhair,
      title: "classic copper color hairstyle ",
      style: "drop-shadow-xl pt-8",
    },

    {
      id: 5,
      src: rubia4,
      title: "Short Hair Nice Blond",
      style: "drop-shadow-xl pt-12",
    },
    {
      id: 6,
      src: niña16,
      title: "Medium Hair Blond",
      style: "drop-shadow-xl text-gray-600 pt-24",
    },
    {
      id: 4,
      src: rubia1,
      title: "Blond Hair",
      style: "drop-shadow-xl text-gray-600 pt-8",
    },
    // {
    //   id: 7,
    //   title: "Firebase",
    //   src: firebase,

    //   style: "shadow-pink-400",
    // },
    // {
    //   id: 8,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-500",
    // },
    // {
    //   id: 9,
    //   src: webPack,
    //   title: "WebPack",
    //   style: "shadow-orange-500",
    // },
    // {
    //   id: 10,
    //   src: tailwind,
    //   title: "Tailwind",
    //   style: "shadow-sky-500",
    // },
  ];

  return (
    <div
      name="Colors Hair"
      className="drop-shadow-xl  shadow-black pt-32 bg-gradient-to-b 
  from-gray-800 to-blue min-h-fit "
    >
      <div
        className="shadow-black max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center w-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4
          border-gray-500 p-2 inline"
          >
            Colors Hair
          </p>
          <p className="py-6">The best Hair colors all in one place</p>
        </div>

        <div
          className="h-fit pb-8
        shadow-black md:grid grid-cols-2 
      gap-4 text-center py-4 px-4 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`h-fit shadow-black hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
            >
              <img
                onClick={handleClick}
                src={src}
                alt=""
                className="shadow-black w-fit mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorHair;
