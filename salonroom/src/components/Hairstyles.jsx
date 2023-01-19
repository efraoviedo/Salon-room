import React, { useState } from "react";
import { Link } from "react-scroll";
import rubiondas2 from "../assets/hairStyles/rubiondas2.png";
// import style1 from "../assets/hairStyles/style1.jpg";
import peinadondas2 from "../assets/hairStyles/peinadondas2.png";

const Hairstyles = () => {
  const [hair, setHair] = useState(false);

  const beautystyles = [
    {
      id: 0,
      title: "Waves",
      src: rubiondas2,
      href: "ModelHairStyles",
      link: "ModelHairStyles",
      style: "items-center",
    },
    {
      id: 1,
      src: peinadondas2,
      title: "Water waves",
      // href: "https://github.com/efraoviedo/Calculadora",
      style: "",
    },
    // {
    //   id: 7,
    //   src: EtchASketchGame,
    //   title: "Etch A Sketch Game",
    //   href: "https://efraoviedo.github.io/index.html-cuadricula/",
    // },
    // {
    //   id: 8,
    //   src: facebookClone,
    //   title: "Facebook Clone",
    //   href: "https://efraoviedo.github.io/Facebook-clone/",
    // },
    // {
    //   id: 9,
    //   src: memoryGame,
    //   title: "Memory Game",
    //   href: "https://github.com/efraoviedo/My-add-memorygame",
    // },
    // {
    //   id: 2,
    //   src: cvApplication,
    //   title: "CV Application",
    //   href: "https://efraoviedo.github.io/My-CV-react-app/",
    // },
    // {
    //   id: 3,
    //   src: battleShipProject,
    //   title: "BattleShip Game",
    //   href: "https://efraoviedo.github.io/Battleship-project/",
    // },
    // {
    //   id: 4,
    //   src: rockPaperScissorsGame,
    //   title: "Rock Paper Scissors Game",
    //   href: "https://efraoviedo.github.io/PiedraPapelOTijeras/",
    // },
    // {
    //   id: 5,
    //   src: appWeather,
    //   title: "App Weather",
    //   href: "https://efraoviedo.github.io/app-weather/",
    // },
    // {
    //   id: 6,
    //   src: ticTacTocGame,
    //   title: "Tic Tac Toe Game",
    //   href: "https://efraoviedo.github.io/juego-Tic-Tac-Toe/",
    // },
  ];

  return (
    <div
      name="hairstyles"
      className="drop-shadow-xl  
        pt-32 bg-gradient-to-b from-blue-500
  to-gray-800 text-white min-h-fit"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold">HairStyles</p>
          <p className="w-full py-6">
            "These sleek, smooth styles are perfect for a sophisticated,
            polished look." "These playful, bouncy curls add a touch of whimsy
            and fun to any outfit." "These textured, messy waves are a great
            choice for a relaxed, bohemian vibe." "These elegant, braided updos
            are a stunning choice for special occasions or formal events."
            "These sleek, high ponytails are a chic and stylish option for work
            or play." "These messy, tousled buns are a trendy and effortless way
            to rock a casual, cool look." "These braided half-up, half-down
            styles are a versatile and romantic choice for any occasion." "These
            sleek, straight styles are perfect for a clean, modern look." "These
            wavy, tousled locks are a great choice for a beachy, laid-back
            style." "These voluminous, glamorous curls are sure to make a
            statement and turn heads." .{" "}
          </p>
          <p className="py-6">
            Check out some of our work styles on my Web Here
          </p>
          <p>MORE Styles</p>
        </div>

        <div
          // className="items-center"
          className="shadow-black grid grid-cols-2 grid-rows-1 sm:grid-cols-2 gap-4
            text-center py-4 px-4 sm:px-0 sm:text-left h-fit"
        >
          {beautystyles.map(
            ({ id, src, title, style, href, link, download }) => (
              <div
                key={id}
                className={`shadow-black hover:scale-105 duration-500
                py-2 rounded-lg ${style}`}
              >
                <p className="m-2 h-fit flex justify-left pl-52 align-middle text-xl">
                  {title}
                </p>

                <Link
                  to={"ModelHairStyles"}
                  smooth
                  duration={50}
                  className="flex justify-between items-center w-full pl-6 m-2 duration-200
                          hover:scale-105"
                >
                  <img
                    onClick={() => setHair(!hair)}
                    // link={link}
                    src={src}
                    alt="models"
                    className="bg-gradient-to-b from-white
                      to-gray-800 w-fit mx-auto m-2 rounded-md h-fit 
                      duration-200 hover:scale-125"
                  />
                </Link>

                <div className="flex items-center justify-left hover:scale-10 cursor-pointer">
                  <Link
                    to={"Colors Hair"}
                    smooth
                    duration={50}
                    className="pl-36 m-2 duration-200
                          hover:scale-105 hover:text-green-500"
                  >
                    Color
                  </Link>
                  <Link
                    to={"Straight Hair"}
                    smooth
                    duration={50}
                    className="px-16 py-3 m-2 duration-200
                          hover:scale-105 hover:text-green-500"
                  >
                    Straight
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hairstyles;
