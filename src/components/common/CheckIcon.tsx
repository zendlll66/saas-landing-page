import React from 'react'
import Image from 'next/image'
interface IconProps {
    className?: string;
    imageName: string; // ชื่อไฟล์ที่ส่งเข้ามา
  }

const CheckIcon: React.FC<IconProps> = ({ className, imageName }) => {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={`/assets/image/${imageName}`}
          alt={imageName}
          fill
          quality={100}
          className="object-contain"
        />
      </div>
    );
  };
  

export default CheckIcon