import Logo from "@assets/logo.svg";
import Hamburger from "@assets/hamburger.svg";
import "@styles/Navbar.css";

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
    <nav className=" container relative flex h-20 items-center justify-between md:h-28">
      <div className="logo">
        <Link to="/">
          <img
            className="absolute -left-[1.6rem] top-0 h-20 cursor-pointer md:-left-[2.3rem] md:h-28"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-elements">
        <ul className="text-md hidden items-center md:flex md:gap-8 lg:gap-12">
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/about"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/services"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/career"
            >
              Career
            </NavLink>
          </li>
          <NavLink to="/contact-us">
            <div className="rounded-full bg-[#2576BC] px-4 py-2 text-white">
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
