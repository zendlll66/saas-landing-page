import React from 'react'


interface BtnProps {
    text: string;
    className?: string; // ใช้สำหรับปรับแต่ง
  }
  
  const Btn: React.FC<BtnProps> = ({ text, className }) => {
    return (
      <button className={`px-[35px] py-[12px] rounded-md font-semibold ${className}`}>
        {text}
      </button>
    );
  };

export default Btn