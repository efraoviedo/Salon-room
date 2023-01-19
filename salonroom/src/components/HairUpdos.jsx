import React from "react";
import moño1 from "../assets/sweetFifteen/moño1.jpg";
import rubia6 from "../assets/sweetFifteen/rubia6.jpg";
import rubia9 from "../assets/sweetFifteen/rubia9.png";
import brownhair1 from "../assets/sweetFifteen/brownhair1.webp";
import rubia5 from "../assets/sweetFifteen/rubia5.jpeg";
import noviaRamo from "../assets/sweetFifteen/noviaRamo.png";
import { Link } from "react-scroll";

const HairUpdos = () => {
  function handleClick(event) {
    event.target.requestFullscreen();
  }

  const techs = [
    {
      id: 1,
      src: moño1,
      title: "Updo Style Hairstyle",
      style: "drop-shadow-xl",
    },
    {
      id: 2,
      src: rubia6,
      title: "Big Waves",
      style: "drop-shadow-xl",
    },
    {
      id: 3,
      src: rubia9,
      title: "Natural Hairstyle ",
      style: "drop-shadow-xl",
    },

    {
      id: 5,
      src: brownhair1,
      title: "Brown Hair with Waves",
      style: "drop-shadow-xl",
    },
    {
      id: 6,
      src: noviaRamo,
      title: "Novia",
      style: "shadow-sky-500",
    },
    // {
    //   id: 4,
    //   src: reactImage,
    //   title: "React",
    //   style: "shadow-blue-600",
    // },
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
    <div>
      <div
        name="Hair Updos"
        className="pt-32 bg-gradient-to-b 
  from-gray-800 to-blue min-h-fit "
      >
        <div
          className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center w-full text-white"
        >
          <div>
            <p
              className="text-4xl font-bold border-b-4
          border-gray-500 p-2 inline"
            >
              Hair Updos Styles
            </p>
            <p className="py-6 pb-16">
              Different hairStyles for You. Make you choice
            </p>
          </div>
          <div className="grid md:flex gap-8">
            <div className="flex">
              <Link
                to={"Modelscuts"}
                smooth
                duration={50}
                className="h-max pt-12"
              >
                <p className="text-center text-gray-800">For a nice party <br /></p>
                <img src={rubia5} alt="my profile" className="md:w-screen md:h-96" />
              </Link>
            </div>

            <div
              className="md:grid grid-cols-2 sm:grid-cols-2
      gap-4 text-center py-4 px-4 sm:px-0 text-gray-700"
            >
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
                >
                  <img
                    onClick={handleClick}
                    src={src}
                    alt=""
                    className="w-fit mx-auto"
                  />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairUpdos;
