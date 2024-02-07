import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import FeaturedCard from "../cards/FeaturedCard";
import { useDispatch } from "react-redux";
import { navbarClose } from "../../redux/features/navbarSlice";
// import { motion } from "framer-motion";

const MegaDropDown = ({ navTitle, menuData }) => {
  const dispatch = useDispatch();
  return (
    <div
    // className="fixed z-[99] top-[4rem] xl:top-[4.5rem] w-full  bg-white border-[#c0c0c0] border-t flex flex-col justify-between max-h-[calc(100dvh-4.5rem)] overflow-y-scroll"
    // key={navTitle}
    // initial={{ x: -100 }}
    // animate={{ x: 0 }}
    // exit={{ x: 100 }}
    // transition={{ duration: 0.1 }}
    >
      <section className="flex flex-col xl:flex-row justify-between h-full">
        <div className="px-2 md:px-4 xl:px-container w-[88%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
          {menuData.map((col, idx) => {
            return (
              <div key={idx}>
                <h3 className="font-bold  py-2 border-grayLine border-b mb-3">
                  {col.subTitle}
                </h3>
                {col.links.map((link, idx) => {
                  return (
                    <Link to="/career" key={idx}>
                      <p className="py-3">
                        <span
                          className="p-1 rounded-md hover:bg-blue-50"
                          onClick={() => dispatch(navbarClose())}
                        >
                          {link}
                        </span>
                      </p>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="bg-[#d1f3fc38] flex flex-col items-stretch xl:pr-container pt-6 pb-4 xl:pl-4">
          <FeaturedCard />
          <br />
          <FeaturedCard />
        </div>
      </section>

      <footer className="px-container py-[9px] hidden xl:flex border-[#c0c0c0] border-t gap-4">
        <button className="border-[#c9c8c8] border-r-[2px] py-[2px] pr-4 flex items-center gap-1 text-primary">
          <FiPhone />
          <Link to="#">contact@hoostly.com</Link>
        </button>
        <button className="border-[#c9c8c8] border-r-[2px] py-[2px] pr-4 flex items-center gap-1 text-primary">
          <FiPhone />
          <Link to="#">+977-98227-99880</Link>
        </button>
        <button className="border-[#c9c8c8] border-r-[2px] py-[2px] pr-4 flex items-center gap-1 text-primary">
          <FiPhone />
          +977-98227-99880
        </button>
        <button className=" py-[2px] px-2 flex items-center gap-1 text-primary">
          <FiPhone />
          Gwarko,Lalitpur,Nepal
        </button>
      </footer>
    </div>
  );
};

export default MegaDropDown;
