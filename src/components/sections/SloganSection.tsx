import React from 'react';
import Btn from '../common/Btn';
import Image from 'next/image';
const SloganSection = () => {
  return (
    <div className="bg-[#6D64FE] relative text-white w-full flex flex-col justify-center items-center text-center px-[140px] py-[100px]">
      <Image
        src="/assets/image/BACKGROUND-work.png"  // หรือ URL จากภายนอกก็ได้
        alt="logo"
        width={200}
        height={200}
        className='absolute left-0 top-0 '
      />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-fit">
          <h1 className="text-6xl font-bold">
            Your work, everywhere you are
          </h1>
          <p className="text-base md:text-lg text-gray-300 mt-4 max-w-6xl text-center leading-relaxed">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
        </div>
      </div>

      <Btn
        text="Try Taskey"
        className="bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105 mt-10"
      />
    </div>
  );
};

export default SloganSection;
