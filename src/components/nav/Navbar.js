// import { Link } from "react-router-dom";
import MegaDropDown from "./MegaDropDown";
import { useEffect, useState } from "react";
import { navDatas } from "../../assets/data/navData";
import { MdKeyboardArrowUp } from "react-icons/md";
// import AnimatedButton from "../button/AminatedButton";
import { motion } from "framer-motion";
// import Example from "../button/BorderAnimate";
import { useLocation } from "react-router-dom";
import GradientBtn from "../button/Gradient";

const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuData, setMenuData] = useState({ navTitle: "", menuContent: [] });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMegaMenu = (title, content) => {
    if (showMegaMenu !== title?.toLowerCase()) {
      setShowMegaMenu(title?.toLowerCase());
      setMenuData({ navTitle: title, menuContent: content });
    } else {
      setShowMegaMenu(null);
    }
  };

  return (
    <>
      <nav
        className={`fixed z-[99]  w-full ${
          showMegaMenu
            ? "bg-white"
            : `${scrolled ? "bg-white border-b" : "bg-transparent"}`
        } flex justify-between items-center px-container py-3`}
      >
        <ul className="hidden xl:flex gap-4 items-center">
          {/* <li className="py-2">
            <img src="/logo.png" className="h-10" />
          </li> */}
          {navDatas.map((navData, idx) => {
            return (
              <li
                key={idx}
                className={`py-3 cursor-pointer ${
                  showMegaMenu
                    ? "text-[#232323]"
                    : `${
                        location.pathname !== "/" ? "text-black" : "text-white"
                      }`
                } font-medium flex items-center gap-1`}
                onClick={() => {
                  handleMegaMenu(navData.navTitle, navData.menuData);
                }}
              >
                {navData.navTitle}{" "}
                <motion.div>
                  <MdKeyboardArrowUp
                    className={`${
                      showMegaMenu && navData.navTitle === menuData.navTitle
                        ? "transform rotate-0 transition-transform duration-400 ease-in-out"
                        : "transform rotate-180 transition-transform duration-400 ease-in-out"
                    }`}
                  />
                </motion.div>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4 h-fit">
          <GradientBtn label="Get in touch" />
        </div>
      </nav>

      {/* MEGA MENU TO SHOW */}
      {showMegaMenu ? (
        <MegaDropDown
          navTitle={menuData.navTitle}
          menuData={menuData.menuContent}
        />
      ) : null}
    </>
  );
};

export default Navbar;
