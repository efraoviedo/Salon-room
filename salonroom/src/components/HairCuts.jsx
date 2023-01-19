import React from "react";
import corteMujer from "../assets/corteMujer.jpg";
import cortemechon2 from "../assets/cortemechon2.png";
import { Link } from "react-scroll";

const HairCuts = () => {
  return (
    <div
      name="hair Cuts"
      className="pt-6 pb-32 bg-pink-50 text-gray-900 min-h-fit z-30"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center min-h-fit"
      >
        <div className="pt-24">
          <p className="text-4xl font-bold border-gray-500">
            {/* <Link to="/HairStyles2">HairCuts</Link> */}
            HairCuts
          </p>

          <p className="text-lg mt-0 pt-2">
            <br /> Hello, we want to showcase our wide range of haircuts
            available at our hairstyling salon. We offer classic and modern cuts
            for men, women, and children. Our stylists are highly trained and
            ready to help you find the perfect haircut for you. We also offer
            color and styling services to give your hair the look you desire.
            Visit us today to make an appointment or for more information!{" "}
          </p>

          <br />

          <p className="text-lg">
            See our wide range of haircuts and select the one you like best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shrink">
            <Link
              to={"Modelscuts"}
              smooth
              duration={50}
              className="items-center w-full h-max pt-12"
            >
              <img
                src={cortemechon2}
                alt="my profile"
                className="w-full pt-6"
              />
            </Link>
            <Link
              to={"Modelscuts"}
              smooth
              duration={50}
              className="
              items-center w-full pt-12"
            >
              <img
                src={corteMujer}
                alt="my profile"
                className="w-full pt-14 ml-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairCuts;
