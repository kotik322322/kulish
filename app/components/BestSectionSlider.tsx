'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import slip1 from '../../public/slip1.jpg';
import slip2 from '../../public/slip2.jpg';
import slip3 from '../../public/slip3.jpg';
import slip4 from '../../public/slip4.jpg';
// import slip5 from '../../public/slip5.jpg';
import slip6 from '../../public/slip6.jpg';
import slip7 from '../../public/slip7.jpg';
import slip8 from '../../public/slip8.jpg';

const images = [
  { img: slip1, id:"1" },
  { img: slip2, id:"2" },
  { img: slip3, id:"3" },
  { img: slip4, id:"4" },
  { img: slip6, id:"5" },
  { img: slip7, id:"6" },
  { img: slip8, id:"7" },
];
const BestSectionSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="w-[100px] ml-auto py-4 flex justify-center gap-x-4">
        <button className="embla__prev" onClick={scrollPrev}>
          <HiOutlineArrowLongLeft className='font-thin text-3xl text-[#655b59]'/>
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <HiOutlineArrowLongRight className='font-thin text-3xl text-[#655b59]'/>
        </button>
      </div>

      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container">
          {images.map(({ img, id }) => (
            <div className="embla__slide " key={id}>
              <Image src={img} alt="" width={400} height={300} className='rounded-md'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSectionSlider;
