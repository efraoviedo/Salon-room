import React, { useState } from "react";
import { FaBeer, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [head, setHead] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "hair Cuts",
    },
    {
      id: 3,
      link: "hairstyles",
    },
    {
      id: 4,
      link: "SweetFifteen",
    },
    {
      id: 5,
      link: "Contact",
    },
    {
      id: 6,
      link: "Colors Hair",
      style: "pt-4 mt-4",
    },
    {
      id: 7,
      link: "Hair Updos",
      style: "pt-4 mt-4",
    },
    {
      id: 8,
      link: "Straight Hair",
      style: "pt-4 mt-4",
    },
    {
      id: 9,
      link: "Extensions",
      style: "pt-4 mt-4",
    },
    {
      id: 10,
      link: "Eyelashes",
      style: "pt-4 mt-4",
    },
  ];

  return (
    <div
      className="z-50 flex justify-between items-center w-full h-16 
      drop-shadow-2xl text-gray-800 font-bold bg-gradient-to-b from-pink-50 to-pink-100 px-14 fixed pt-12 sm:pt-16 pb-24"
    >
      <div>
        <div className="socket scale-50">
          <div className="gel center-gel">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c3 r1">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c4 r1">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c5 r1">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c6 r1">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>

          <div className="gel c7 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>

          <div className="gel c8 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c9 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c10 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c11 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c12 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c13 r2">
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c14 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c15 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c16 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c17 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
          <div className="gel c18 r2">
            <div className="hex-brick h1 w-4 h-4"></div>
            <div className="hex-brick h2 w-4 h-4"></div>
            <div className="hex-brick h3 w-4 h-4"></div>
          </div>
        </div>

        <h1
          className="text-3xl md:text-5xl font-Oswald ml-1 pl-12 pt-10 hover:scale-105
          duration-200 hover:text-blue-900 "
        >
          Italian Salon
        </h1>
        <p className="text-sm md:text-xs ml-2 pl-12">
          {" "}
          Every thing you need about beauty you have it all here
        </p>
      </div>
      <div className="text-sm flex">
        <ul className="hidden md:grid grid-rows-2 md:grid-cols-5 md:h-20">
          {links.map(({ id, link, style }) => (
            <li
              key={id}
              className={`px-6 cursor-pointer
          capitalize font-medium text-gray-900 drop-shadow-lg shadow-green-600/50 hover:scale-105
          duration-200 hover:text-green-500 to green-900 pt-8  ${style}`}
            >
              <Link to={link} smooth duration={50}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <p>de aca para abajo todo es el menu oculto al reducir la pantalla</p> */}
      <div
        onClick={() => setHead(!head)}
        className="bg-pink-100 mr-36 cursor-pointer pr-2 text-gray-700 md:hidden hover:text-xl hover:bg-blue-200 "
      >
        {head ? <FaTimes size={35} /> : <FaBeer size={35} />}

        {head && (
          <ul
            className="flex flex-col justify-center items-center
             absolute top-0 right-0 w-full h-screen bg-gradient-to-b
             from-blue-400  to-gray-400 text-blue-900 hover:scale-y-105
             duration-200 pt-1"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-3 cursor-pointer capitalize py-2
                   text-4xl"
              >
                <Link
                  onClick={() => setHead(!head)}
                  to={link}
                  smooth
                  duration={50}
                  className="text-xl hover:text-xl hover:text-cyan-700"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
