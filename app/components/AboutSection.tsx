import Link from 'next/link';
import React from 'react';

const AboutSection = () => {
  return (
    <div className="mt-10 px-4 py-4  bg-[#eeeeee] flex flex-col gap-y-2" >
      <div className='flex items-end gap-x-4'>
        <div className="w-[160px] h-[160px] bg-white flex flex-col justify-center items-center font-bold text-2xl">
          Material
        </div>
        <Link href="/" className='border border-black text-[10px] px-4 py-1'>Read More</Link>
      </div>

      <div className='flex items-end gap-x-4'>
        <div className="w-[160px] h-[160px] bg-white flex flex-col justify-center items-center font-bold text-2xl">
          Material
        </div>
        <Link href="/" className='border border-black text-[10px] px-4 py-1'>Read More</Link>
      </div>
    </div>
  );
};

export default AboutSection;
