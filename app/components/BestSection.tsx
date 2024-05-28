'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import slip1 from '../../public/slip1.jpg';
import slip2 from '../../public/slip2.jpg';
import slip3 from '../../public/slip3.jpg';
import BestSectionSlider from './BestSectionSlider';
import AboutSection from './AboutSection';

const BestSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className=" h-screen">
          <BestSectionSlider/>
          <AboutSection/>

    </div>
  );
};

export default BestSection;
