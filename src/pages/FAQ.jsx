import React, { useEffect, useState } from "react";
import { faqmushroom } from "../assets/images";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import faqData from "../data/faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (faqId) => {
    setOpenIndex(openIndex === faqId ? null : faqId);
  };

  // Group FAQs by category
  const groupedFAQs = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});
useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Header Image */}
      <div className="w-full h-[70vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={faqmushroom}
          alt="FAQ"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-primary text-center">
        Answers to your frequently asked questions
      </h2>

      {/* FAQ Sections */}
      <div className="w-full max-w-2xl">
        {Object.keys(groupedFAQs).map((category) => (
          <div key={category} className="mb-8">
            {/* Category Title */}
            <h2 className="text-3xl font-light text-center text-dark mb-4">
              {category}
            </h2>

            {/* Questions and Answers */}
            {groupedFAQs[category].map((faq) => (
              <div
                key={faq.id}
                className="flex justify-between w-full bg-backdrop p-4 rounded-lg shadow-md mb-4"
              >
                {/* Arrow Icon */}
                <FaChevronRight
                  className={`text-gray-700 transition-transform ${
                    openIndex === faq.id ? "rotate-90" : ""
                  }`}
                  onClick={() => toggleAnswer(faq.id)}
                />

                {/* Question and Answer */}
                <div className="flex flex-col flex-1 mx-4">
                  {/* Question */}
                  <h4
                    className={`text-xl font-semibold cursor-pointer ${
                      openIndex === faq.id ? "font-extrabold" : ""
                    }`}
                    onClick={() => toggleAnswer(faq.id)}
                  >
                    {faq.question}
                  </h4>

                  {/* Answer */}
                  {openIndex === faq.id && (
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  )}
                </div>

                {/* Plus Icon */}
                <FaPlus
                  className={`text-gray-700 transition-transform ${
                    openIndex === faq.id ? "rotate-45" : ""
                  }`}
                  onClick={() => toggleAnswer(faq.id)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}