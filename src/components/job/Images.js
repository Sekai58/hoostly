import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const Card = ({ emoji, hueA, hueB }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div
        className="w-[250px] h-[250px] flex justify-center items-center bg-white text-8xl hover:text-9xl card"
        variants={cardVariants}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
};

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
];

const Images = () => {
  return food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
};

export default Images;
