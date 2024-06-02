import React, { useState } from "react";
import FaqItem from "../../../components/main/faq/faqitem";
import { dataFaq } from "../../../dummydata/main/datafaq";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <section
        className="sm:px-20 space-y-16 mb-[120px] mt-[70px] px-10 md:px-[336px]"
        id="faq"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-medium text-textPrimary text-center">
            Frequently Asked Questions
          </h1>
          <h3 className="text-xl text-textTertiary text-center">
            Berbagai Pertanyaan yang sering di ajukan
          </h3>
        </div>
        <div className="grid grid-cols-1 divide-y gap-8">
          {dataFaq.map((faq) => (
            <FaqItem
              key={faq.id}
              {...faq}
              openFaq={openFaq}
              setOpenFaq={setOpenFaq}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqSection;
