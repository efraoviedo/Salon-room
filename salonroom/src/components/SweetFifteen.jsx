import React from "react";
import niña1 from "../assets/sweetFifteen/niña1.jpg";
import girl1 from "../assets/sweetFifteen/girl1.jpg";
import girl3 from "../assets/sweetFifteen/girl3.jpg";
import girl2 from "../assets/sweetFifteen/girl2.jpg";
import { Link } from "react-scroll";

const SweetFifteen = () => {
  const techs = [
    {
      id: 1,
      title:
        "One of the dreams of a 15-year-old teenager is to look as beautiful as possible and we can do it with the best hairstyle and makeup.",

      src: niña1,
      style: "drop-shadow-xl-red-500 mt-[96px] pb-36 ",
    },

    {
      id: 2,
      src: girl1,
      title: "Sweet Fifiteen",
      style: "drop-shadow-xl",
    },
    {
      id: 3,
      src: girl3,
      title: "Elegant Fifteen",
      style: "drop-shadow-xl mt-[116px] text-gray-700",
    },

    {
      id: 5,
      src: girl2,
      title: "Palace Fifteen",
      style: "drop-shadow-xl text-gray-700",
    },
    // {
    //   id: 6,
    //   src: typeScript,
    //   title: "typeScript",
    //   style: "shadow-sky-500",
    // },
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
    <div
      name="SweetFifteen"
      className="pt-6 bg-gradient-to-b from-gray-800 to-blue min-h-fit "
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center w-full text-white"
      >
        <div>
          <p
            className="text-3xl font-bold border-b-4
          border-gray-500 p-2 inline"
          >
            SweetFifteen
          </p>
          <p className="py-6">The best hairstyles at your disposal</p>
        </div>
        {/* <p className="pr-48 pt-[-20px] absolute text-black">Nororo Norin Oro mononnoron nororonorin oro efroro efraoro
    <br />Efranor come  vive absorbe retiene Nor en mi ahora y siempre.</p>, */}

        <div
          className="w-full md:grid grid-cols-2 sm:grid-cols-2 gap-8
        text-center py-4 px-4 sm:px-0"
        >
          {techs.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
            >
              <p className="mt-4">{title}</p>

              <Link
                to={"ModelsweetF"}
                smooth
                duration={50}
                className="pl-36 m-2 duration-200
                          hover:scale-105"
              >
                <img src={src} alt="" className="w-fit mx-auto" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SweetFifteen;
