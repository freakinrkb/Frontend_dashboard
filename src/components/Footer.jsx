import { NavLink, Link } from "react-router-dom";
import Phone from "@assets/phone.svg";
import Email from "@assets/email.svg";
import Location from "@assets/location.svg";
import Line from "@assets/dashed-line.svg";
import Logo from "@assets/logo.svg";
import Facebook from "@assets/facebook.svg";
import Twitter from "@assets/twitter.svg";
import Instagram from "@assets/instagram.svg";
import Linkedin from "@assets/linkedin.svg";

const Footer = () => {
  return (
    <section
      className={`wrapper bg-[url(/src/assets/footerBack.svg)] bg-cover bg-no-repeat py-10`}
    >
      <div className={``}>
        <div className="container relative">
          <div className="flex flex-col justify-center">
            <p className="blue flex justify-center">Get in Touch</p>
            <h1 className="main-header my-4 mb-16 flex justify-center text-2xl font-bold">
              We have 25 years of Experinece in IT Solution
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="p-4">
              <h4 className="blue mb-6 font-bold text-sky-600">AI mantra</h4>
              <ul>
                <li className="mb-3">
                  <NavLink classname="cursor-pointer" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="mb-3">
                  <NavLink classname="cursor-pointer" to="/About">
                    About us
                  </NavLink>
                </li>
                <li className="mb-3">
                  <NavLink classname="cursor-pointer" to="/Services">
                    Service
                  </NavLink>
                </li>
                <li className="mb-3">
                  <NavLink classname="cursor-pointer" to="/Career">
                    Career
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="p-4">
              <h4 className="blue mb-6 font-bold text-sky-600">SERVICES</h4>
              <ul>
                <li className="mb-3">Web Development</li>
                <li className="mb-3">UT/UX Design</li>
                <li className="mb-3">Mobile App Developnent</li>
                <li className="mb-3">Digital Marketing</li>
                <li className="mb-3">Corporate Branding</li>
                <li className="mb-3">Corporate Videos</li>
              </ul>
            </div>
            <div className="col-span-2 p-4">
              <div className="flex flex-col">
                <h4 className="blue font-bold text-sky-600">
                  WE’RE HERE TO HELP
                </h4>
                <div className="grid grid-cols-2">
                  <div className="address p-4">
                    <div className="flex max-w-10 items-center justify-center rounded-full bg-gray-500 p-3 shadow-lg">
                      <img className="w-8" src={Location} alt="email" />
                    </div>
                    <h4 className="blue my-2 font-bold text-sky-600">
                      Location
                    </h4>
                    <ul>
                      <li className="">Dwarka Expressway,</li>
                      <li> DLF Corporate greens,</li>
                      <li className="">3rd Floor Tower 3, Sec 74A,</li>
                      <li className="">Gurugram, Haryana 122004, IN</li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <div className="phone p-4">
                      <div className="flex max-w-10 items-center justify-center rounded-full bg-gray-500 p-3 shadow-lg">
                        <img className="w-8" src={Phone} alt="email" />
                      </div>
                      <h4 className="blue my-2 font-bold text-sky-600">
                        Contact Us
                      </h4>
                      <ul>
                        <li className="">+91&nbsp;9882641949</li>
                      </ul>
                    </div>
                    <div className="email p-4">
                      <div className="flex max-w-10 items-center justify-center rounded-full bg-gray-500 p-3 shadow-lg">
                        <img className="w-8" src={Email} alt="email" />
                      </div>
                      <h4 className="blue my-2 font-bold text-sky-600">
                        Business Email
                      </h4>
                      <ul>
                        <li className="">abhishek@dash.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="w-full" src={Line} alt="" />
          <div className="hidden items-center justify-between md:flex">
            <div className="Logo">
              <Link to="/">
                <img
                  className="h-20 cursor-pointer md:h-28"
                  src={Logo}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="copyright hidden text-gray-400 lg:flex">
              &copy;&nbsp;2023 AI mantra. ALL RIGHTS RESERVED.
            </div>
            <div className="social flex gap-4">
              <Link to="">
                <div className="flex max-w-10 items-center justify-center rounded-full bg-sky-600 p-3 shadow-lg">
                  <img className="w-8" src={Facebook} alt="email" />
                </div>
              </Link>
              <Link to="">
                <div className="flex max-w-10 items-center justify-center rounded-full bg-sky-600 p-3 shadow-lg">
                  <img className="w-8" src={Instagram} alt="email" />
                </div>
              </Link>
              <Link to="">
                <div className="flex max-w-10 items-center justify-center rounded-full bg-sky-600 p-3 shadow-lg">
                  <img className="w-8" src={Twitter} alt="email" />
                </div>
              </Link>
              <Link to="https://www.linkedin.com/company/dash/">
                <div className="flex max-w-10 items-center justify-center rounded-full bg-sky-600 p-3 shadow-lg">
                  <img className="w-8" src={Linkedin} alt="email" />
                </div>
              </Link>
            </div>
          </div>
          <img className="w-full" src={Line} alt="" />
          <div className="copyright mt-4 flex items-center justify-center text-gray-400 lg:hidden">
            &copy;&nbsp;2023 AI mantra. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
