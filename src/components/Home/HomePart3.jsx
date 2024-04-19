import React from "react";
import "./HomePart.css";

export default function HomePart3() {
  const Heading = "For businesses that care deeply about sustainability";

  const Text_1 =
    "Do you run a business that is committed to sustainability in every aspect of your work?";

  const Text_2 =
    "Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?";

  const Text_3 =
    "If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:";

  const image = "https://ecoyaan.com/images/OurStory4.png";

  return (
    <div className="home-part-3 lg:h-[75vh] h-auto flex justify-center items-center">
      <div className="container mx-auto flex lg:flex-row flex-col justify-center items-center lg:pb-16 pb-8">
        <div className="lg:w-1/2 px-6 lg:px-20 text-left">
          <h2 className="lg:text-3xl text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
            {Heading}
          </h2>
          <p className="text-base lg:text-lg text-gray-700 mb-2">{Text_1}</p>
          <p className="text-base lg:text-lg text-gray-700 mb-2">{Text_2}</p>
          <p className="text-base lg:text-lg text-gray-700 mb-2">{Text_3}</p>
          <button className="bg-green-500 mt-4 hover:bg-green-600 text-white font-bold lg:py-2 px-4 py-1 rounded">
            Contact Us
          </button>
        </div>
        <div className="lg:w-1/2 lg:p-24">
          <img
            src={image}
            alt="img"
            className="rounded-lg lg:p-6 p-12 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
