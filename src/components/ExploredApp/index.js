import React from "react";

const ExploredApp = () => {
  return (
    <div className="bg-backgroundBlack py-24">
      <div className="md:w-[70vw] w-[90vw] m-auto border text-center border-customBorderColor shadow-inner-light-blue rounded-lg p-10">
        <h1 className="text-white font-thin text-3xl mb-6">
          Explore Our <span className="text-cyan-300">dApp</span>
        </h1>
        <p className="text-white font-thin text-md mb-6">
          EthAi is an AI-powered dApp designed to help traders make smarter,
          data-driven decisions. By tracking smart money flows, monitoring key
          wallets, and providing real-time market insights, EthAi empowers users
          to stay ahead of trends. The platform offers intutive AI features for
          asset recommendations, market analysis, and personalized crypto Q&A,
          making it the ultimate tool for both novice and experienced traders.
        </p>
        <button
          type="button"
          className="text-white text-sm border border-customBorderColor px-5 py-2 rounded-md shadow-inner-light-blue hover:bg-customLightBlue hover:text-black hover:font-medium"
        >
          Open dApp
        </button>
      </div>
    </div>
  );
};

export default ExploredApp;
