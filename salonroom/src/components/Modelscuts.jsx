import React from "react";
import frontpage from "../assets/frontpage.jpg";
// import corteMujer from "../assets/corteMujer.jpg";
import rubia2 from "../assets/rubia2.jpg";

const Modelscuts = () => {
  function handleClick(event) {
    event.target.requestFullscreen();
  }

  return (
    <div
      name="Modelscuts"
      className="pb-32 bg-pink-50 text-gray-900 min-h-fit z-30"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center min-h-fit"
      >
        <div className="pt-24">
          <p className="text-4xl font-bold border-gray-500">
            {/* <Link to="/HairStyles2">HairCuts</Link> */}
            HairCuts Models
          </p>

          <p className="text-md:text-lg mt-0 pt-12">
            <br /> Hi we have the best hair cuts styles. You can have any cut
            you want and if you don't know which one is perfect for you, we will
            advise you on the right one.{" "}
          </p>

          <br />

          <p className="text-lg">
            Select your haircuts and select the one you like best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shrink">
            <img
              onClick={handleClick}
              src={frontpage}
              alt="my model"
              className="w-full pt-32 relative"
            />
            <p className="pr-48 pt-16 absolute text-xs md:text-sm">
              Qualified expert hair care and maintenance stylists are <br />{" "}
              ready to assist you at the time you require it..
            </p>

            <img
              onClick={handleClick}
              src={rubia2}
              alt="my model"
              className="w-full h-full pt-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modelscuts;
