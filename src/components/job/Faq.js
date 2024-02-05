import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { faqData } from "../../assets/data/faqData";
import Header from "./Header";
import { IoIosArrowForward } from "react-icons/io";

const handleChange = (key) => {
  console.log("key here", key);
};

const Faq = () => {
  return (
    <div className="bg-[#f7f8fb]">
      <Header
        title="Frequently asked Questions "
        subTitle="No more burning questions, just burning excitement to join our team."
      />
      <section className="px-container pt-[2rem] pb-[4rem]">
        <Accordion allowZeroExpanded onChange={(key) => handleChange(key[0])}>
          {faqData.map((faq, idx) => {
            return (
              <AccordionItem
                key={idx}
                className="my-5 border border-[#838383] p-2 px-5 rounded-md"
              >
                <AccordionItemHeading className="">
                  <AccordionItemButton className="py-2 flex justify-between font-semibold">
                    {faq.question}
                    <IoIosArrowForward />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="pr-5">
                  <p>{faq.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
};

export default Faq;
