import React from 'react';
import Video from 'next-video';
import bgVideo from '../../videos/bgVideo.mp4';

const HeroPage = () => {
  return (
    <video loop autoPlay muted>
      <source src="/bgVideo.mp4" />
    </video>
  );
};

export default HeroPage;
