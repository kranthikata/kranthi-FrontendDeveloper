import React from "react";
import AboutItem from "../AboutItem";
import graphLogo from "../../assets/graph.png";
import walletLogo from "../../assets/wallet.png";
import toolsLogo from "../../assets/Tools.png";
import futureTechnologyLogo from "../../assets/Future Technology.png";

const aboutItems = [
  {
    id: 0,
    image: graphLogo,
    heading: "Stay Ahead",
    description: "No more guesswork—get clear, trustable insights.",
  },
  {
    id: 1,
    image: walletLogo,
    heading: "Know Your Assets",
    description: "Always stay on top of how your investments are performing.",
  },
  {
    id: 2,
    image: toolsLogo,
    heading: "Simple, Not Overwhelming",
    description:
      "Our tools are designed to make complex market analysis easy to understand and act on.",
  },
  {
    id: 3,
    image: futureTechnologyLogo,
    heading: "Future-Proof",
    description:
      "We're constantly improving, adding new features to help you make the most informed decisions possible.",
  },
];
const About = () => {
  return (
    <div className="bg-backgroundBlack pt-16 pb-10">
      <div className="md:w-[50vw] w-[85vw] text-center m-auto">
        <h1 className="text-white text-4xl mb-6">About EthAi</h1>
        <p className="text-customLightBlue text-sm px-5 mb-6">
          At EthAi, we're all about making crypto trading easier and more
          intutive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements.
        </p>
        <button
          type="button"
          className="text-white text-sm border border-customBorderColor px-5 py-2 rounded-md shadow-inner-light-blue hover:bg-customLightBlue hover:text-black"
        >
          Read more
        </button>
      </div>

      <ul className="bg-customBlack p-10 flex md:w-[50vw] w-[85vw] m-auto mt-10 rounded-xl flex-wrap">
        {aboutItems.map((eachItem) => (
          <AboutItem key={eachItem.id} aboutInfo={eachItem} />
        ))}
      </ul>
    </div>
  );
};

export default About;
