// import { Link } from "react-router-dom";
import MegaDropDown from "./MegaDropDown";
import { useEffect, useState } from "react";
import { navDatas } from "../../assets/data/navData";
import { MdKeyboardArrowUp } from "react-icons/md";
// import AnimatedButton from "../button/AminatedButton";
import { motion } from "framer-motion";
// import Example from "../button/BorderAnimate";
import { Link, useLocation } from "react-router-dom";
import GradientBtn from "../button/Gradient";
import HambergerMenu from "./HamburgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { navbarClose, navbarOpen } from "../../redux/features/navbarSlice";
import { GoHome } from "react-icons/go";

const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuData, setMenuData] = useState({ navTitle: "", menuContent: [] });

  const location = useLocation();
  const dispatch = useDispatch();

  const navbar = useSelector((state) => {
    return state.navbar.value;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      dispatch(navbarOpen());
    } else {
      setShowMegaMenu(null);
      dispatch(navbarClose());
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-[99]  w-full ${
          showMegaMenu
            ? "bg-white"
            : `${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`
        } hidden sm:flex justify-between items-center px-2 md:px-4  xl:px-container py-3`}
      >
        <ul className="hidden xl:flex gap-4 items-center">
          <Link
            to="/"
            className="flex items-center h-10 text-xl lg:text-2xl font-bold  text-primary"
          >
            Hoostly
          </Link>
          {navDatas.map((navData, idx) => {
            return (
              <li
                key={idx}
                className={`py-3 cursor-pointer ${
                  showMegaMenu
                    ? "text-[#232323]"
                    : `${
                        location.pathname !== "/" ? "text-black" : "text-black"
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
                      navbar &&
                      showMegaMenu &&
                      navData.navTitle === menuData.navTitle
                        ? "transform rotate-0 transition-transform duration-400 ease-in-out"
                        : "transform rotate-180 transition-transform duration-400 ease-in-out"
                    }`}
                  />
                </motion.div>
              </li>
            );
          })}
          <Link
            to="/career"
            className="flex items-center  font-medium  text-[#232323]"
          >
            Career
          </Link>
        </ul>
        <div className="hidden xl:flex gap-4 h-fit">
          <GradientBtn label="Get in touch" />
          {/* <Border /> */}
        </div>
        <div className="w-full flex xl:hidden justify-end">
          <HambergerMenu />
        </div>
      </nav>

      {/* MEGA MENU TO SHOW */}
      {showMegaMenu && navbar ? (
        <motion.div
          className="hidden fixed z-[99] top-[4rem] xl:top-[4.5rem] w-full  bg-white border-[#c0c0c0] border-t xl:flex flex-col justify-between max-h-[calc(100dvh-4.5rem)] overflow-y-scroll"
          key={menuData.navTitle}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ duration: 0.1 }}
        >
          <MegaDropDown
            navTitle={menuData.navTitle}
            menuData={menuData.menuContent}
          />
        </motion.div>
      ) : null}

      <div className=" fixed bottom-0 z-[999] w-full sm:hidden bg-backgroundTransSecondary text-[#494949] flex justify-evenly items-center rounded-t-xl">
        <div className="flex flex-col items-center">
          <GoHome />
          <p className="text-[0.7rem]">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <GoHome />
          <p className="text-[0.7rem]">Home</p>
        </div>
        <div className="rounded-full bg-backgroundTransSecondary flex items-center justify-center -translate-y-5 p-1">
          <div className="rounded-full bg-[#008e459d] p-1">
            <GoHome className="w-10 h-10 p-[11px] bg-primary rounded-full text-white font-bold" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GoHome />
          <p className="text-[0.7rem]">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <GoHome />
          <p className="text-[0.7rem]">Home</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
