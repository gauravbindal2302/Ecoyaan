import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function HomeCarousel() {
  return (
    <div className="lg:h-100vh">
      <div className="lg:h-[90vh] h-auto lg:pt-8 pt-20">
        <Carousel
          transition={{ duration: 0.5 }}
          autoplay={true}
          autoplaySpeed={2000}
          className="relative overflow-hidden"
        >
          <div className="relative">
            <img
              src="Carousel-Image-1.png"
              alt="img"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-black z-10">
              <h2 className="font-bold text-base lg:text-4xl lg:h-12 mb-2">
                Buy Less, Buy Better!
              </h2>
              <h3 className="lg:text-xl text-xs lg:px-0 md:px-16 px-16 lg:h-12 mb-2">
                Authentic source of truth for your sustainability needs.
              </h3>
              <button className="px-4 text-xs py-1 rounded-lg lg:h-10 lg:text-base text-gray-100 bg-green-700">
                About Us
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="Carousel-Image-2.png"
              alt="img"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-black z-10">
              <h2 className="font-bold text-base lg:text-4xl lg:h-12 mb-2">
                Follow us on Instagram
              </h2>
              <h3 className="lg:text-xl text-xs lg:px-0 md:px-16 px-16 lg:h-12 mb-2">
                For climate news, lifestyle tips, & updates{" "}
              </h3>
              <button className="px-4 text-xs py-1 rounded-lg lg:h-10 lg:text-base text-gray-100 bg-green-700">
                Follow Us
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="Carousel-Image-3.png"
              alt="img"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black z-10">
              <h2 className="font-bold lg:text-4xl text-base lg:h-12 lg:mb-4 mb-2">
                Are you a business?
              </h2>
              <h3 className="lg:text-2xl text-xs lg:h-12 lg:px-0 px-4 lg:mb-4 mb-2">
                We would love to work with you{" "}
              </h3>
              <button className="lg:py-2 px-4 text-xs lg:text-base py-1 lg:h-9 rounded-lg text-gray-100 bg-green-700">
                Get In Touch
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
