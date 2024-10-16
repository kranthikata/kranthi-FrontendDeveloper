import React, { useEffect, useState, useRef } from "react";
import image from "../../assets/Group 21.png";
import riskGuardImage from "../../assets/Container.png";

const OurFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="bg-backgroundBlack pt-16 pb-10">
      <div className="w-[85vw] rounded-3xl m-auto">
        <h1 className="text-center text-white text-4xl md:hidden mb-6">
          Our Features
        </h1>

        <div className="md:flex justify-between mb-4">
          {/* -----------------Trade Optimizer--------------------- */}
          <div className="md:w-[25%] p-5 md:pt-24 md:pb-8 flex flex-col items-center bg-customBlack rounded-xl md:rounded-tl-[50px] mb-3 md:mb-0">
            <img src={image} alt="Trade Optimizer" />
            <div className="text-center md:mt-16 mt-6">
              <h1 className="text-white text-xl font-medium mb-4">
                Trade Optimizer
              </h1>
              <p className="text-customLightBlue text-sm px-5">
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity.
              </p>
            </div>
          </div>

          <div className="md:w-[47%]">
            {/* ------------------Market Insight--------------- */}
            <div className="p-4 bg-customBlack rounded-xl mb-4 h-[40%] flex flex-col justify-center">
              <h1 className="text-white text-xl font-medium mb-4">
                Market Insight
              </h1>
              <p className="text-customLightBlue text-sm">
                Stay ahead of the market. Get real-time updates on market
                trends, track top traders' movements, and spot signals from key
                influencers.
              </p>
            </div>
            {/* ------------------Our Features in large devices------------------ */}
            <div className="bg-customBlack rounded-xl h-[57%] hidden md:flex items-center justify-center shadow-inner-light-blue">
              <h1
                ref={textRef}
                className={`text-white text-3xl font-medium mb-4 transition-transform transition-opacity duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[30vh]"
                }`}
              >
                Our Features
              </h1>
            </div>
          </div>

          {/* ------------------Risk Guard------------------ */}
          <div className="md:w-[25%] md:pt-16 bg-customBlack rounded-xl md:rounded-tr-[50px] flex flex-col items-center">
            <img src={riskGuardImage} alt="Risk Guard" className="w-48" />
            <div className="text-center mt-6 pb-6">
              <h1 className="text-white text-xl font-medium mb-4">
                Risk Guard
              </h1>
              <p className="text-customLightBlue text-sm w-[60%] m-auto">
                Get alerts on market swings and potential risks before they
                impact your portfolio. This agent helps you navigate volatility
                and stay prepared for anything.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex justify-between">
          {/* ---------------------Portfolio Sync---------------- */}
          <div className="p-6 bg-customBlack rounded-xl md:rounded-bl-[50px] md:w-[43%] mb-4 md:mb-0">
            <h1 className="text-white text-xl font-medium mb-4">
              Portfolio Sync
            </h1>
            <p className="text-customLightBlue text-sm md:w-[50%] w-[80%]">
              Easily manage your portfolio. You'll always know what you own, how
              it's performing, and where it's headed.
            </p>
          </div>

          {/* -----------------------Opportunity Scout-------------------- */}
          <div className="p-6 bg-customBlack rounded-xl md:rounded-br-[50px] md:w-[55%]">
            <h1 className="text-white text-xl font-medium mb-4">
              Opportunity Scout
            </h1>
            <p className="text-customLightBlue text-sm md:w-[50%] w-[80%]">
              Find exciting new projects, events and tokens that others might be
              missing. Identifying promising opportunities early, so you never
              miss out on the next big thing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
