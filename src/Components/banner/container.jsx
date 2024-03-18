import React from 'react';
const Container = ({ imageUrl, title, subtitle, buttonText, buttonOnClick }) => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center lg:min-h-[80vh]" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-5"></div>
      
      <div className="mt-auto mb-20">
        <div className="bg-white/20 bg-opacity-40 backdrop-blur-2xl p-20 rounded-lg lg:">
          <h1 className="text-4xl font-bold text-black">{title}</h1>
          {subtitle && <p className="mt-2 text-lg text-black">{subtitle}</p>}
          {buttonText && buttonOnClick &&
            <button onClick={buttonOnClick} className="mt-4 py-2 px-4 bg-yellow-700 text-white font-semibold rounded-lg hover:bg-yellow-800 transition-colors duration-300">
              {buttonText}
            </button>
          }
        </div>
      </div>

    </div>
  )
}

export default Container;
