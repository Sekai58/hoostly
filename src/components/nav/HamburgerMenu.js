import { RxHamburgerMenu } from "react-icons/rx";
// import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { RiPhoneLine } from "react-icons/ri";
import {
  hamburgerClose,
  // hamburgerClose,
  hamburgerToggle,
} from "../../redux/features/hamburgerSlice";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { navDatas } from "../../assets/data/navData";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import MegaDropDown from "./MegaDropDown";

const HambergerMenu = () => {
  const [menuData, setMenuData] = useState({ navTitle: "", menuContent: [] });
  const [showMegaMenu, setShowMegaMenu] = useState(null);

  const isOpened = useSelector((state) => {
    return state.hamburger.value;
  });

  const dispatch = useDispatch();
  // const location = useLocation();

  const handleMegaMenu = (title, content) => {
    if (showMegaMenu !== title?.toLowerCase()) {
      setShowMegaMenu(title?.toLowerCase());
      setMenuData({ navTitle: title, menuContent: content });
    } else {
      setShowMegaMenu(null);
    }
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandedIndex = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex xl:hidden ">
      <header className="flex justify-end w-full">
        <button
          className={`text-2xl font-bold`}
          onClick={() => dispatch(hamburgerToggle())}
        >
          <RxHamburgerMenu
            className={`${
              isOpened
                ? "hidden"
                : "-rotate-0 transform transition duration-500 ease-in-out"
            }`}
          />
        </button>
      </header>

      {isOpened ? (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 right-0 w-[100%] z-10 bg-gray-50 border-[#d7d7d7] h-[100dvh] sm:px-8 overflow-y-scroll no-scrollbar bg-white `}
        >
          <button
            className="flex w-full justify-start py-3 text-3xl px-2"
            onClick={() => dispatch(hamburgerClose())}
          >
            <IoMdClose className={`${isOpened ? "" : "hidden"}`} />
          </button>
          <div className="mt-3 mb-5 px-2 md:px-4">
            <p className="flex items-center gap-[2px]">
              <RiPhoneLine className="text-lg" />
              <span className="block text-xl font-bold">982-2799-880</span>
              <img
                src="https://www.flagcolorcodes.com/data/Flag-of-Nepal.png"
                className="h-4"
                alt="nepal flag"
              />
            </p>
            <p className="ml-5 text-sm -translate-y-2">(10am to 5pm suport)</p>
          </div>

          <Accordion allowZeroExpanded>
            {navDatas?.map((navData, idx) => {
              return (
                <motion.div
                  key={idx}
                  onClick={() => {
                    handleMegaMenu(navData.navTitle, navData.menuData);
                  }}
                >
                  <AccordionItem
                    key={idx}
                    className="border-b border-[#838383] p-2 px-5 bg-white"
                  >
                    <AccordionItemHeading
                      onClick={() => handleExpandedIndex(idx)}
                    >
                      <AccordionItemButton className="py-2 flex justify-between font-semibold">
                        <span
                          className={`${
                            expandedIndex === idx ? "text-primary" : ""
                          }`}
                        >
                          {navData.navTitle}
                        </span>
                        <motion.div>
                          <MdKeyboardArrowUp
                            className={`${
                              showMegaMenu &&
                              navData.navTitle === menuData.navTitle
                                ? "transform rotate-0 transition-transform duration-400 ease-in-out"
                                : "transform rotate-180 transition-transform duration-400 ease-in-out"
                            }`}
                          />
                        </motion.div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="pr-5">
                      <motion.div
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
                    </AccordionItemPanel>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HambergerMenu;
