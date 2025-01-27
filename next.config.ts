import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    OPEN_WEATHER_API_KEY: "707f16bc41e2f537683194af2ab09b28",
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "openweathermap.org", pathname: "/**" }],
  },
};

export default nextConfig;
