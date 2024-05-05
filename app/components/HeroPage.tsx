"use client"
import React from 'react';
import Video from 'next-video';
import bgVideo from '/bgVideo.webm';
import BackgroundVideo from 'next-video/background-video';

const HeroPage = () => {
  return (
    <video src="/bgVideo.webm" autoPlay muted playsInline preload='auto' className='w-full h-full object-cover'/>
  );
};

export default HeroPage;
