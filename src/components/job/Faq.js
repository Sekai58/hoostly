import React, { useState } from "react";
import Header from "./Header";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandedIndex = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="bg-[#f7f8fb]">
      <Header
        title="Frequently asked Questions "
        subTitle="No more burning questions, just burning excitement to join our team."
      />
      <section className="px-container pt-[2rem] pb-[4rem]">
        <Accordion allowZeroExpanded>
          {data?.map((faq, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.975,
                }}
              >
                <AccordionItem
                  key={idx}
                  className="my-5 border border-[#838383] p-2 px-5 rounded-md bg-white"
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
                        {faq.question}
                      </span>

                      <CgMathPlus
                        className={`${expandedIndex === idx ? "hidden" : ""}`}
                      />
                      <CgMathMinus
                        className={`${expandedIndex === idx ? "" : "hidden"}`}
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="pr-5">
                    <p>{faq.answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
};

export default Faq;
