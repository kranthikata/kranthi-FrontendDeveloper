import React from "react";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/Facebook.png";
import discord from "../../assets/discord.png";

const Footer = () => {
  return (
    <footer className="bg-footerBackground py-16">
      <div className="w-[90vw] m-auto flex justify-around">
        {/* ---------------Left Container---------------- */}
        <div>
          <div className="flex mb-4 w-[95%] justify-center md:justify-start">
            <svg
              width="35"
              height="34"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.75"
                y="8.22852"
                width="7.54303"
                height="7.54286"
                fill="#1ADEF5"
              />
              <path
                d="M0.75 0C4.91581 0 8.29303 3.37705 8.29303 7.54286H0.75V0Z"
                fill="#1E808C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.29204 4.70423V0C7.13217 0 6.03343 0.261794 5.0517 0.729516C6.52196 1.65991 7.67032 3.05305 8.29204 4.70423Z"
                fill="#1E808C"
              />
              <rect
                x="8.97845"
                width="7.54303"
                height="7.54286"
                fill="#1ADEF5"
              />
              <path
                d="M17.207 0C21.3728 0 24.75 3.37705 24.75 7.54286H17.207V0Z"
                fill="#1ADEF5"
              />
              <rect
                x="17.207"
                y="8.22852"
                width="7.54303"
                height="7.54286"
                fill="#1ADEF5"
              />
              <path
                d="M17.207 16.457H24.75V23.9999C20.5842 23.9999 17.207 20.6228 17.207 16.457Z"
                fill="#1ADEF5"
              />
              <path
                d="M0.75 16.457H8.29303V23.9999C4.12722 23.9999 0.75 20.6228 0.75 16.457Z"
                fill="#1ADEF5"
              />
              <path
                d="M8.97845 16.457H16.5215C16.5215 20.6228 13.1443 23.9999 8.97845 23.9999V16.457Z"
                fill="#1E808C"
              />
            </svg>
            <h1 className="font-bold md:text-xl ml-3 text-white text-3xl">
              EthAi
            </h1>
          </div>
          <div className="flex justify-between">
            {/* ---------------Telegram------------------- */}
            <img
              src={telegram}
              alt="telegram icon"
              className="w-10 h-10 mr-2"
            />

            {/* -----------------Instagram------------------ */}
            <img
              src={instagram}
              alt="instagram icon"
              className="w-10 h-10 mr-2 "
            />

            {/* ---------------------TwitterX---------------- */}
            <img src={twitter} alt="twitter icon" className="w-10 h-10 mr-2" />

            {/* ----------------------Facebook---------------------- */}
            <img
              src={facebook}
              alt="facebook icon"
              className="w-10 h-10 mr-2"
            />

            {/* ------------------------Discord--------------------- */}
            <img src={discord} alt="discord icon" className="w-10 h-10 mr-2" />
          </div>
        </div>

        {/* -----------------Right Container -------------------- */}
        <div className="w-1/3 hidden md:block">
          <h1 className="text-white text-3xl mb-5">
            "Designed for traders of today, just like you."
          </h1>
          <div className="border rounded-xl flex items-center justify-between h-[35%]">
            <input
              type="email"
              placeholder="What's your work email?"
              className="px-3 py-2 bg-transparent rounded-xl w-[70%] outline-none text-white"
            />
            <button
              type="button"
              className="mr-1 text-white text-sm border font-thin border-customBorderColor px-5 py-2 rounded-xl shadow-inner-light-blue hover:bg-customLightBlue hover:text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
