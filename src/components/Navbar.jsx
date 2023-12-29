import Logo from "@assets/logo.svg";
import Hamburger from "@assets/hamburger.svg";

import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleMenuClick = () => {
    console.log("Need Sidebar design");
    setShowNav((prev) => {
      !prev;
    });
  };

  return (
    <nav className="container relative h-20 md:h-28 flex justify-between items-center">
      <div className="logo">
        <Link to="/">
          <img
            className="absolute top-0 -left-[1.6rem] md:-left-[2.3rem] h-20 md:h-28 cursor-pointer"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-elements">
        <ul className="hidden md:flex items-center md:gap-8 lg:gap-12 text-md">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Service</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
          <NavLink to="/contact-us">
            <div className="rounded-full py-2 px-4 bg-[#2576BC] text-white">
              Contact us
            </div>
          </NavLink>
        </ul>
        <img
          className="cursor-pointer md:hidden"
          src={Hamburger}
          alt="Menu"
          onClick={handleMenuClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
