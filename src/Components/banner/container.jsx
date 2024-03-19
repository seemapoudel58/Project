import React, { useEffect, useState } from "react";
import "./container.css";

const Container = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonOnClick,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div
      className="  relative bg-cover bg-center  "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="flex flex-col justify-end min-h-[85vh] max-w-[80vw] pb-20 pl-10 lg:flex-none ">
        <div
          className={`bg-white/20 bg-opacity-40 backdrop-blur-2xl px-10 py-[3rem] rounded-lg lg:max-w-[50vw]  ${
            isAnimating ? "animate-slide-in" : ""
          }`}
        >
          {title && (
            <h1
              className={`text-4xl font-bold text-black lg:text-5xl ${
                isAnimating ? "animate-slide-in-left1" : ""
              }`}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className={`mt-2 text-lg text-black lg:text-xl ${
                isAnimating ? "animate-slide-in-left2" : ""
              }`}
            >
              {subtitle}
            </p>
          )}
          {buttonText && buttonOnClick && (
            <button
              onClick={buttonOnClick}
              className={`mt-4 py-2 px-4 bg-yellow-700 text-white font-semibold rounded-lg hover:bg-yellow-800 transition-colors duration-300 ${
                isAnimating ? "animate-slide-in-left3" : ""
              }`}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
