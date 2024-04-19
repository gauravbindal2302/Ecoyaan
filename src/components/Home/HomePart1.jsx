import React from "react";
import "./HomePart.css";

export default function HomePart1() {
  const Heading =
    "Join our community in creating a more sustainable future for everyone";

  const Text_1 =
    "At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.";

  const Text_2 =
    "Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.";

  const image = "HomePart1.png";

  return (
    <>
      <div className="home-part-1 lg:h-[75vh] h-auto flex justify-center items-center lg:py-0 p-4 lg:mb-0 mb-4">
        <div className="container mx-auto flex flex-col lg:flex-row text-left justify-center items-center lg:gap-0 gap-8">
          <div className="w-full lg:w-1/2 lg:text-left lg:px-10 lg:mt-0 mt-4 mb-6 lg:mb-0">
            <h2 className="lg:text-3xl text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
              {Heading}
            </h2>
            <p className="text-base lg:text-lg text-gray-700 mb-2">{Text_1}</p>
            <p className="text-base lg:text-lg text-gray-700">{Text_2}</p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-12">
            <img src={image} alt="img" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
