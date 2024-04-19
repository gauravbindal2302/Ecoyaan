import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="header flex justify-between items-center bg-white lg:px-24 lg:py-6 px-8 py-4 position-fixed w-full"
        style={{
          zIndex: 999,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // This adds a shadow at the bottom
        }}
      >
        <div className="logo">
          <Link to="/">
            <h1 className="lg:text-4xl text-2xl font-bold text-green-500 pointer-cursor">
              Ecoyaan
            </h1>
          </Link>
        </div>
        {/* Hamburger menu for small devices */}
        <div className="lg:hidden">
          <GiHamburgerMenu size={24} onClick={toggleMenu} />
        </div>
        {/* Navigation links for desktop view */}
        <div className="nav-items hidden lg:flex gap-8 text-lg font-semibold">
          <ul className="flex gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>{" "}
            <li>Contact</li>{" "}
          </ul>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div
          className="mobile-menu bg-white absolute top-20 right-0 w-full py-4 z-50 border-b border"
          style={{
            zIndex: 999,
          }}
        >
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
