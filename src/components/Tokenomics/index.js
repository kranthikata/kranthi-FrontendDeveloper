import React from "react";
import donutImage from "../../assets/Donut.png";
import backgroundVideo from "../../assets/tokenomicsBackground.mov";

const tokenDetailsOne = [
  {
    id: 0,
    keyName: "Name",
    value: "EthAi",
  },
  {
    id: 1,
    keyName: "Token Name",
    value: "$EthAi",
  },
  {
    id: 2,
    keyName: "Token standard",
    value: "ERC20",
  },
  {
    id: 3,
    keyName: "Blockchain",
    value: "Ethereum",
  },
  {
    id: 4,
    keyName: "Total Supply",
    value: "100 Million",
  },
  {
    id: 5,
    keyName: "Tax",
    value: "5%/5%",
  },
];
const tokenDetailsTwo = [
  {
    id: 0,
    keyName: "Team",
    value: "35%",
  },
  {
    id: 1,
    keyName: "Marketing",
    value: "5%",
  },
  {
    id: 2,
    keyName: "Liquidity Pool",
    value: "90%",
  },
];
const Tokenomics = () => {
  return (
    <div className="relative w-full">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Content over the video */}
      <div className="relative z-10 h-full p-4">
        <div className="pt-10">
          <h1 className="text-center text-white text-4xl mb-6">Tokenomics</h1>
          <div className="md:flex md:w-[85vw] m-auto justify-between items-center p-6 md:p-0">
            {/* ------Donut graph Container--------- */}
            <div>
              <img src={donutImage} alt="graph" />
            </div>

            {/* --------Token Details Container----------- */}
            <div className="text-white font-light md:w-[35%]">
              <ul className="p-8 bg-customBlack bg-opacity-50 backdrop-blur-md p-4 rounded-lg mb-3">
                {tokenDetailsOne.map((eachItem) => (
                  <li key={eachItem.id} className="flex mb-2 pl-4">
                    <p className="w-1/2">{eachItem.keyName}</p>
                    <p> : &nbsp;&nbsp; {eachItem.value}</p>
                  </li>
                ))}
              </ul>
              <ul className="p-8 bg-customBlack bg-opacity-50 backdrop-blur-md p-4 rounded-lg">
                {tokenDetailsTwo.map((eachItem) => (
                  <li key={eachItem.id} className="flex mb-2 pl-4">
                    <p className="w-1/2">{eachItem.keyName}</p>
                    <p> : &nbsp;&nbsp; {eachItem.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------Overlay----------------------------- */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Tokenomics;
