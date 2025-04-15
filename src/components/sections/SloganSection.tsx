import React from 'react';
import Btn from '../common/Btn';
import Image from 'next/image';

const SloganSection = () => {
  return (
    <div className="bg-[#6D64FE] relative text-white w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-[140px] py-[100px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/assets/image/BACKGROUND-work.png"
        alt="background"
        width={200}
        height={200}
        className="absolute left-0 top-0 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your work, everywhere you are
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 leading-relaxed">
            Access your notes from your computer, phone or tablet by synchronising with various services,
            including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux,
            Android and iOS. A terminal app is also available!
          </p>
        </div>
        <Btn
          text="Try Taskey"
          className="bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105 mt-10"
        />
      </div>
    </div>
  );
};

export default SloganSection;
