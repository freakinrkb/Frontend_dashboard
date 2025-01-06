import Logo from "@assets/logo.svg";
import Hamburger from "@assets/hamburger.svg";
import "@styles/Navbar.css";

import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleMenuClick = () => {
    console.log("Need Sidebar design");
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <nav className=" container relative ">
      <div className="large-nav flex h-28 justify-between">
        <div className="logo">
          <Link to="/">
            <img
              className="h-20 cursor-pointer md:h-28"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="nav-elements flex h-20 items-center md:h-28">
          <ul className="text-md hidden items-center md:flex md:gap-4 lg:gap-12">
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
                to="/products"
              >
                Products
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
            <NavLink classname="cursor-pointer" to="/contact-us">
              <div className="rounded-full bg-[#2576BC] px-4 py-2 text-white">
                Contact us
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
      <img
        className="absolute right-6 top-6 cursor-pointer md:hidden"
        src={Hamburger}
        alt="Menu"
        onClick={handleMenuClick}
      />
      <div className="mobile-nav ml-6">
        <ul
          className={`text-md ${showNav ? " " : "hidden "} flex flex-col gap-4`}
        >
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/"
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/about"
              onClick={handleMenuClick}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/products"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/services"
              onClick={handleMenuClick}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/career"
              onClick={handleMenuClick}
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "activeLink " : ""}`}
              to="/contact-us"
              onClick={handleMenuClick}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
