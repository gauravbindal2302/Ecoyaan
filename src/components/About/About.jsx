import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 lg:pt-32 px-4 pt-28">
        {/* Row 1: About Ecoyaan */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="lg:text-3xl text-2xl font-bold mb-4">About Ecoyaan</h2>
          <p className="lg:text-lg text-base lg:mb-4 mb-2">
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
          </p>
          <p className="lg:text-lg text-base">
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:
          </p>
          <ul className="list-disc pl-6 mt-4 lg:text-lg text-base">
            <li className="lg:mb-2 mb-3">
              Tips and tricks to adopt a more eco-friendly and low-waste
              lifestyle
            </li>
            <li className="lg:mb-2 mb-3">
              Videos, posts, and quizzes on climate change and sustainability
            </li>
            <li className="lg:mb-2 mb-3">
              Events and pledges that invite you to adopt a more sustainable
              lifestyle
            </li>
          </ul>
        </div>
        <hr className="border border-2 rounded" />
        {/* Row 2: Our Values */}
        <div className="values flex flex-col gap-6 lg:mt-4 mt-8 mb-12 animate-fade-in-up">
          <h2 className="lg:text-3xl text-2xl text-center font-bold mb-2 lg:m-8">
            Our Values
          </h2>
          <div className="values-row-1 flex lg:flex-row flex-col gap-6">
            <div className="card-1 flex border rounded-lg lg:py-6 lg:px-2 py-4 items-center bg-white shadow-md">
              <div className="flex flex-col w-[40%] lg:w-[25%] justify-center items-center">
                <img
                  src="https://ecoyaan.com/images/Trust.png"
                  alt=""
                  className="h-20"
                />
                <h3 className="text-xl font-bold text-center mt-3">Trust</h3>{" "}
              </div>
              <div className="w-[60%] lg:w-[75%]">
                <p className="lg:text-lg text-base">
                  We value the trust of our community. We strive to be
                  transparent and honest in everything we do, from the content
                  we share today to sourcing our products in the future.
                </p>
              </div>
            </div>{" "}
            <div className="card-2 flex border rounded-lg lg:py-6 lg:px-2 py-4 items-center bg-white shadow-md">
              {" "}
              <div className="flex flex-col w-[40%] lg:w-[25%] justify-center items-center">
                <img
                  src="https://ecoyaan.com/images/Authenticity.png"
                  alt=""
                  className="h-20"
                />
                <h3 className="text-xl font-bold text-center mt-3">
                  Authenticity
                </h3>
              </div>
              <div className="w-[60%] lg:w-[75%]">
                <p className="lg:text-lg text-base">
                  We value the trust of our community. We strive to be
                  transparent and honest in everything we do, from the content
                  we share today to sourcing our products in the future.
                </p>
              </div>
            </div>
          </div>

          <div className="values-row-2 flex lg:flex-row flex-col gap-6">
            <div className="card-3 flex border rounded-lg lg:py-6 lg:px-2 py-4 items-center bg-white shadow-md">
              <div className="flex flex-col w-[40%] lg:w-[25%] justify-center items-center">
                <img
                  src="https://ecoyaan.com/images/Impact.png"
                  alt=""
                  className="h-20"
                />
                <h3 className="text-xl font-bold text-center mt-3">Impact</h3>{" "}
              </div>
              <div className="w-[60%] lg:w-[75%]">
                <p className="lg:text-lg text-base">
                  We value the trust of our community. We strive to be
                  transparent and honest in everything we do, from the content
                  we share today to sourcing our products in the future.
                </p>
              </div>
            </div>{" "}
            <div className="card-4 flex border rounded-lg lg:py-6 lg:px-2 py-4 items-center bg-white shadow-md">
              {" "}
              <div className="flex flex-col w-[40%] lg:w-[25%] justify-center items-center">
                <img
                  src="https://ecoyaan.com/images/FunAndEngaging.png"
                  alt=""
                  className="h-20"
                />
                <h3 className="text-xl font-bold text-center px-2 mt-3">
                  Fun & Engaging
                </h3>
              </div>
              <div className="w-[60%] lg:w-[75%]">
                <p className="lg:text-lg text-base">
                  We value the trust of our community. We strive to be
                  transparent and honest in everything we do, from the content
                  we share today to sourcing our products in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-2 rounded" />

        {/* Row 3: Our Story */}
        <div className="mb-12 px-4 lg:px-0 animate-fade-in-up">
          <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-center my-10 lg:my-12">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-60 lg:py-6">
            <div className="card flex items-center pt-4 bg-white shadow-md rounded-lg lg:pb-0 pb-4">
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-01.png"
                alt=""
                className="h-[50%] w-[75%] rounded-lg"
              />
              <h4 className="text-base font-bold mb-2">CTO, Ecoyaan</h4>
              <div className="flex gap-1 mb-2">
                <FaLinkedin className="text-linkedin hover:text-linkedin-dark transition-colors duration-300" />
                <FaTwitter className="text-twitter hover:text-twitter-dark transition-colors duration-300" />
                <FaInstagram className="text-instagram hover:text-instagram-dark transition-colors duration-300" />
              </div>
              <p className="text-base text-center px-10 pt-2">
                We started Ecoyaan after watching an episode of “Our Planet II”,
                where we saw the devastating impact of plastic pollution and
                climate change on the albatross birds.
              </p>
            </div>{" "}
            <div className="card flex items-center py-4 bg-white shadow-md rounded-lg lg:pb-0 pb-4">
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-02.png"
                alt=""
                className="h-[50%] w-[75%] rounded-lg"
              />
              <h4 className="text-base font-bold mb-1">CTO, Ecoyaan</h4>
              <div className="flex gap-1 mb-2">
                <FaLinkedin className="text-linkedin hover:text-linkedin-dark transition-colors duration-300" />
                <FaTwitter className="text-twitter hover:text-twitter-dark transition-colors duration-300" />
                <FaInstagram className="text-instagram hover:text-instagram-dark transition-colors duration-300" />
              </div>
              <p className="text-base text-center px-10 pt-2">
                We started Ecoyaan after watching an episode of “Our Planet II”,
                where we saw the devastating impact of plastic pollution and
                climate change on the albatross birds.
              </p>
            </div>
            {/* Add similar cards for other team members */}
          </div>
        </div>
        <hr className="border border-2 rounded" />

        {/* Row 4: Meet The Team */}
        <div className="team  animate-fade-in-up">
          <h2 className="lg:text-3xl text-2xl font-bold mb-8 text-center mt-12">
            Meet The Team
          </h2>
          <div className="grid lg:px-24 px-8 grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-8 items-center">
            {[
              {
                name: "Shruthi",
                image:
                  "https://ecoyaan.com/images/about-us-social-media-team-01.png",
                position: "Social Media",
                description:
                  "Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability.",
              },
              {
                name: "Urmil",
                image:
                  "https://ecoyaan.com/images/about-us-social-media-team-02.png",
                position: "Social Media",
                description:
                  "Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion.",
              },
              {
                name: "Divya",
                image:
                  "https://ecoyaan.com/images/about-us-product-team-01.png",
                position: "UX Design",
                description:
                  "Divya creates user-friendly and engaging interfaces for our platform.",
              },
              {
                name: "Prashanth",
                image:
                  "https://ecoyaan.com/images/about-us-product-team-02.png",
                position: "Engineering",
                description:
                  "Prashanith is our front-end engineer, who brings the UX designs to life",
              },
              {
                name: "Sai Abhilash",
                image:
                  "https://ecoyaan.com/images/about-us-product-team-03.png",
                position: "Engineering",
                description:
                  "Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform",
              },
              {
                name: "Sarwan Singh",
                image:
                  "https://ecoyaan.com/images/about-us-product-team-02.png",
                position: "Founder",
                description:
                  "Sarwan creates engaging content for us. He runs his own sustainable apparel store with his sister and advocates for slow fashion.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="team-member border lg:px-12 p-4 rounded-lg bg-white shadow-md transform transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt=""
                  className="mb-2 h-[40%] m-auto"
                />
                <h2 className="text-center mb-2 text-xl font-bold">
                  {member.name}
                </h2>
                <h4 className="text-base font-bold text-center mb-3 uppercase text-[#9b2f2f]">
                  {member.position}
                </h4>
                <div className="flex gap-2 justify-center mb-3">
                  <FaLinkedin className="text-linkedin hover:text-linkedin-dark transition-colors duration-300" />
                  <FaTwitter className="text-twitter hover:text-twitter-dark transition-colors duration-300" />
                  <FaInstagram className="text-instagram hover:text-instagram-dark transition-colors duration-300" />
                </div>
                <p className="text-base text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
