import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TurkishFlag, BritainFlag } from "../assets/icons";
import { HiMenu } from "react-icons/hi";

//tabs
const tabs = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Products", route: "/products" },
  { label: "Services", route: "/services" },
  { label: "Gallery", route: "/gallery" },
  { label: "ContactUs", route: "/contactus" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full h-20 xs:hidden flex shadow-lg justify-between">
        {/*Logo*/}
        <div className="w-[15%] h-full bg-green-400 mx-2"></div>
        {/*tabs*/}
        <div className="w-[60%] h-full  flex justify-center items-center">
          <div className="w-[75%] h-[50%] text-center flex justify-between">
            {tabs.map((tab, index) => (
              <div
                key={index}
                to={tab.route}
                type="button"
                className="w-[16%] h-full flex justify-center items-center cursor-pointer rounded-md hover:bg-slate-200"
              >
                <span className="text-md font-mono">{tab.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/*langauge*/}
        <div className="w-[10%] h-full mr-2 flex justify-center items-center gap-4">
          <TurkishFlag size={48} />
          <span className="font-mono text-md"> Turkish </span>
        </div>
        {/**/}
      </div>

      {/*Mobile responsive*/}
      <div className="hidden xs:flex w-full h-full flex-col">
        <div className="w-full h-full">
          {/*Header*/}
          <div className="w-full h-12 bg-red-400 flex justify-between">
            <div className="w-[30%] h-full bg-yellow-200"></div>
            <div
              onClick={toggleMenu}
              className="w-[20%] h-full bg-green-300 flex items-center justify-center"
            >
              <HiMenu size={32} />
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="w-[60%] h-full bg-black/20 bg-opacity-20 p-2">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  to={tab.route}
                  //   onClick={toggleMenu}
                  type="button"
                  className="w-full py-2 px-4 cursor-pointer hover:bg-secondary-200 rounded-md"
                >
                  <span className="text-md font-mono">{tab.label}</span>
                </div>
              ))}
              <div
                type="button"
                className="w-full py-2 px-4 cursor-pointer hover:bg-secondary-200 rounded-md"
              >
                <span className="text-md font-mono">Languages</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
