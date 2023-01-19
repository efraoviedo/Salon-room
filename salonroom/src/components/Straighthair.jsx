import React from "react";
import liso22 from "../assets/liso22.png";
import liso11 from "../assets/liso11.png";
import { Link } from "react-scroll";

const Straighthair = () => {
  return (
    <div
      name="Straight Hair"
      className="pt-6 pb-12 bg-pink-50 text-gray-900 min-h-fit z-30"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center min-h-fit"
      >
        <div className="pt-24">
          <p className="text-4xl font-bold border-gray-500">
            {/* <Link to="/HairStyles2">HairCuts</Link> */}
            keratin hair straightening treatment.
          </p>

          <p className="text-lg mt-0 pt-12">
            <br /> If you are one of the people who have curly, wavy or very
            pronounced waves hair and you always want to have your hair straight
            or extra-smooth or less frizzy, you are going to need our expert
            hand because we have the best Keratin straightening treatments!{" "}
          </p>

          <br />

          <p className="text-lg">Best treatments for Hair.</p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shrink">
            <Link
              to={"hair Cuts"}
              smooth
              duration={50}
              className="items-center w-full h-max pt-8"
            >
              <img src={liso11} alt="my profile" className="w-full pt-10" />
            </Link>
            <Link
              to={"hair Cuts"}
              smooth
              duration={50}
              className="
              items-center w-full pt-8"
            >
              <img
                src={liso22}
                alt="my profile"
                className="w-full  pt-10 ml-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Straighthair;
