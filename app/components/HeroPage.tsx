import React from 'react';
import Video from 'next-video';
import bgVideo from '../../videos/bgVideo.mp4';

const HeroPage = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="">
      <source src="/bgVideo.webm" type="video/webm" />
    </video>
  );
};

export default HeroPage;
