import React from "react";
import plusIcon from "../../assets/plusIcon.png";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="bg-backgroundBlack py-24">
      <div className="md:flex w-[70vw] m-auto">
        {/* ==============Left Container=============== */}
        <div className="md:w-1/2">
          <h1 className="text-white md:text-3xl text-4xl font-thin mb-10">
            Frequently Asked Questions
          </h1>
        </div>

        {/* ==============Questions Container============ */}
        <ul className="space-y-6 md:w-1/2 font-thin text-white">
          <li className="flex items-center">
            <img src={plusIcon} alt="plus" />
            <p className="ml-3">What is EthAi?</p>
          </li>
          <li className="flex items-center">
            <img src={plusIcon} alt="plus" />
            <p className="ml-3">How can EthAi can help me as a Trader?</p>
          </li>
          <li className="flex items-center">
            <img src={plusIcon} alt="plus" />
            <p className="ml-3">Who can use EthAi?</p>
          </li>
          <li className="flex items-center">
            <img src={plusIcon} alt="plus" />
            <p className="ml-3">How does EthAi track smart money flow?</p>
          </li>
          <li className="flex items-center">
            <img src={plusIcon} alt="plus" />
            <p className="ml-3">How does ensure data security?</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
