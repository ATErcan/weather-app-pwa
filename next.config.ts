import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    OPEN_WEATHER_API_KEY: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
    GOOGLE_CLOUD_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "openweathermap.org", pathname: "/**" },
    ],
  },
};

export default nextConfig;
