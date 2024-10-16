import React from "react";

const AboutItem = (props) => {
  const { aboutInfo } = props;
  const { image, heading, description } = aboutInfo;
  return (
    <li className="md:w-1/2 md:mb-3 mb-8">
      <img src={image} alt={heading} className="mb-3" />
      <h1 className="text-white text-xl font-thin mb-3">{heading}</h1>
      <p className="text-customLightBlue text-sm w-[90%] mb-3 font-thin">
        {description}
      </p>
    </li>
  );
};

export default AboutItem;
