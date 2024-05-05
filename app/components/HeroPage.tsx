"use client"
import React from 'react';
import Video from 'next-video';
// import bgVideo from 'https://vimeo.com/942804367';
import bgVideo from '../../videos/bgVideo.mp4';
import BackgroundVideo from 'next-video/background-video';

const HeroPage = () => {
  return (
    <video src="/bgVideo.mp4" autoPlay muted playsInline className='w-full h-full object-cover overflow-hidden'/>
  );
};

export default HeroPage;
