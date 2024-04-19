import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer flex flex-col lg:flex-row bg-[#0c4a6e] gap-8 lg:px-12 p-6 lg:py-12 lg:mt-12 mt-2 text-[#cbd5e1]">
        <div className="footer-col-1 lg:w-1/2 flex flex-col gap-10 lg:gap-0">
          <div className="newsletter text-left lg:px-12">
            <span className="font-bold lg:text-3xl text-2xl">Newsletter</span>
            <p className="mt-2 text-[#94a3b8]">
              Subscribe to receive updates on the latest blog posts, exciting
              future launches, and exclusive content delivered straight to your
              inbox.
            </p>
            <div className="flex flex-col lg:flex-row gap-1 mt-6">
              <input
                type="text"
                placeholder="Your Email Address"
                className="px-3 rounded py-1 lg:w-64 border-gray-300 focus:outline-none focus:border-green-500 placeholder-gray-700 text-gray-700"
              />
              <button className="px-3 lg:py-0 py-1 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600 lg:mt-0">
                Subscribe
              </button>
            </div>
          </div>
          <div className="follow-us flex flex-col lg:mt-8 lg:px-12 text-left">
            <span className="font-bold text-lg tracking-wide">Follow Us</span>
            <ul className="flex mt-2 gap-2">
              <li>
                <FaLinkedin className="text-white hover:text-linkedin-dark transition-colors duration-300" />
              </li>
              <li>
                <FaTwitter className="text-white hover:text-twitter-dark transition-colors duration-300" />
              </li>
              <li>
                <FaInstagram className="text-white hover:text-instagram-dark transition-colors duration-300" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col-2 lg:w-1/2 grid grid-cols-1 gap-8 text-left">
          <div className="grid grid-cols-2 gap-8">
            <div className="company">
              <span className="font-bold text-lg tracking-wide">Company</span>
              <ul className="mt-2 text-[#94a3b8]">
                <li>About Us</li>
                <li>Sell on Ecoyaan</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="links">
              <span className="font-bold text-lg tracking-wide">Links</span>
              <ul className="mt-2 text-[#94a3b8]">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="address">
              <span className="font-bold text-lg tracking-wide">
                Registered Address
              </span>
              <ul className="mt-2 text-[#94a3b8]">
                <li>1-N-12T-781/1 Sri Krishna Vilasa,</li>
                <li>Urvastores, Ashoknagar(MR), Mangalore</li>
                <li>Dakshina Kannada- 575006</li>
                <li>Karnataka, India</li>
              </ul>
            </div>
            <div className="contact">
              <span className="font-bold text-lg tracking-wide">Contact</span>
              <ul className="mt-2 text-[#94a3b8]">
                <li>Kindkarma E-Retail Private Limited</li>
                <li>CIN: U47912KA2023PTC182592</li>
                <li>Telephone: +91 9980490777</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
