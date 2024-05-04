import React from 'react';
import Video from 'next-video';
import bgVideo from "../../videos/bgVideo.mp4"

const HeroPage = () => {
  return (
    <Video
      src={bgVideo}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      className=""></Video>
  );
};

export default HeroPage;
