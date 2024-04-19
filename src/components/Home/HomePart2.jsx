import React from "react";
import "./HomePart.css";

export default function HomePart2() {
  const Heading = "Carefully curated Eco-friendly products";

  const Text_1 =
    "We believe that every purchase you make can have a positive impact on the planet and the future.";

  const Text_2 =
    "Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.";

  const image = "HomePart2.mp4";

  return (
    <>
      <div className="home-part-2 lg:h-[60vh] h-auto flex justify-center items-center lg:mb-16 mb-12">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row text-left justify-center items-center lg:gap-0 gap-8">
          <div className="lg:w-1/2 lg:p-24">
            <video src={image} alt="img" className="rounded-lg lg:px-0 px-4" />
          </div>
          <div className="lg:w-1/2 px-6 lg:px-20 text-left">
            <h2 className="lg:text-3xl text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
              {Heading}
            </h2>
            <p className="text-base lg:text-lg text-gray-700 mb-2">{Text_1}</p>
            <p className="text-base lg:text-lg text-gray-700">{Text_2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
