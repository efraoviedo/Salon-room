import React from "react";
import { Link } from "react-scroll";
// import frontpage from "../assets/frontpage.jpg";
import frontpage1 from "../assets/frontpage1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full relative flex items-center z-40 pb-32"
    >
      <img src={frontpage1} alt="my profile" className="w-screen h-fit pt-40" />

      <div className="pl-16 pt-64 items-center absolute">
        <h2
          className="pt-24 text-xl sm:text-5xl font-bold
          text-gray-900"
        >
          Welcome to our beauty room
        </h2>
        <p className="text-sm inset-0 text-gray-300 py-4 max-w-md">
          Hello and welcome to our beauty parlor! We are excited to have you
          here and offer you the best beauty and personal care services. Our
          team of highly qualified professionals is at your disposal to provide
          you with a unique and relaxing experience. We offer a wide range of
          treatments, from manicures and pedicures to massages and facials. We
          hope to see you soon and help you feel beautiful and rejuvenated!
        </p>

        <Link
          to="Hair Updos"
          smooth
          duration={50}
          className="shadow-lg mt-56 w-56 inset-0 group text-white px-6 py-3 my-2
            flex items-center text-right rounded-md bg-gradient-to-r
            from-cyan-400 to-cyan-500 lg:mt-0 transition ease-in duration-700 cursor-pointer"
        >
          Top Beauty
          <span className="group-hover:rotate-90 duration-300 pl-12">
            <MdKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
