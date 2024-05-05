// import { withNextVideo } from "next-video/process";
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withNextVideo(nextConfig);

import { withNextVideo } from 'next-video/process';

const nextConfig = {};

const config = withNextVideo(nextConfig, {
  provider: 'backblaze',
  providerConfig: {
    backblaze: { endpoint: 'https://vimeo.com/942804367' }
  }
});

export default config;