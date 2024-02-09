import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[100vh] flex justify-center items-center sticky top-[5rem]"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[80vh] xl:w-[80vw] rounded-[30px] p-[50px] card"
      >
        <div className="flex flex-col xl:flex-row h-[100%] mt-[50px] gap-5">
          <div className="relative w-full xl:w-[60%] md:top-[10%] flex flex-col gap-7">
            <h2 className=" text-4xl font-bold flex justify-start">{title}</h2>
            <p className="font-semibold hidden xl:block">{description}</p>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="font-semibold">Tap to Share</span> - Instantly
                connect with a simple tap. Seamlessly share your contact info
                without others needing an app.
              </li>
              <li>
                <span className="font-semibold">Tap to Share</span> - Instantly
                connect with a simple tap. Seamlessly share your contact info
                without others needing an app.
              </li>
              <li>
                <span className="font-semibold">Tap to Share</span> - Instantly
                connect with a simple tap. Seamlessly share your contact info
                without others needing an app.
              </li>
            </ul>
            <span className="flex items-center gap-3 border border-primary w-fit rounded-3xl px-3 py-1">
              <Link href={url} target="_blank" rel="noopener noreferrer">
                See more
              </Link>
              <FaArrowRightLong />
            </span>
          </div>

          <div className="relative w-[60%] h-[100%] rounded-[25px] overflow-hidden">
            <motion.div
              className="w-[100%] h-[100%]"
              style={{ scale: imageScale }}
            >
              <img
                src={src}
                alt="products"
                className="object-cover rounded-[25px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
