import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* -----------------Nav for larger devices------------------ */}
      <nav className="lg:flex justify-between items-center hidden">
        <div className="flex w-[12%]">
          <svg
            width="30"
            className="ml-6"
            height="29"
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
            <rect x="8.97845" width="7.54303" height="7.54286" fill="#1ADEF5" />
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
          <h1 className="font-bold text-lg ml-1 text-white">EthAi</h1>
        </div>

        <div className="rounded-full px-20 py-4 text-customLightBlue bg-customBlack flex items-center justify-around w-[50%] bg-opacity-50 backdrop-blur-md">
          <a href="./Features">Features</a>
          <a href="./WhyUs">Why Us</a>
          <a href="./Tokenomice">Tokenomics</a>
          <a href="./Roadmap">Roadmap</a>
        </div>

        <div className="flex justify-around w-[12%]">
          <button className="font-inter text-md mr-5 text-white">Log in</button>
          <button className="bg-buttonBackground py-2 px-3 rounded-lg text-black text-sm shadow-inner-light-blue">
            Whitepaper
          </button>
        </div>
      </nav>

      {/* ------------------Nav for mobile and tab version-------------- */}
      <nav className="lg:hidden">
        <div className="relative flex justify-between rounded-full px-10 py-4 text-customLightBlue bg-customBlack w-[80%] m-auto bg-opacity-50 backdrop-blur-md">
          <svg
            width="30"
            height="29"
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
            <rect x="8.97845" width="7.54303" height="7.54286" fill="#1ADEF5" />
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
          <button type="button" onClick={toggleMenu}>
            <HiOutlineMenuAlt4 size="30" />
          </button>
          <div
            className={`absolute p-6 text-customLightBlue bg-customBlack w-full m-auto bg-opacity-50 backdrop-blur-md left-0 rounded-xl flex flex-col space-y-5 transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "top-16 opacity-100 scale-100"
                : "-top-96 opacity-0 scale-95"
            }`}
          >
            <a
              href="./Features"
              className="hover:bg-customBlack px-4 rounded-md py-3"
            >
              Features
            </a>
            <a
              className="hover:bg-customBlack px-4 rounded-md py-3"
              href="./WhyUs"
            >
              Why Us
            </a>
            <a
              className="hover:bg-customBlack px-4 rounded-md py-3"
              href="./Tokenomice"
            >
              Tokenomics
            </a>
            <a
              className="hover:bg-customBlack px-4 rounded-md py-3"
              href="./Roadmap"
            >
              Roadmap
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
