'use client';

import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const libraries = ["places", "drawing", "geometry"];

export default function MapProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
    libraries: libraries as Libraries,
  });

  const goBack = () => router.back();

  if (loadError) return (
    <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <p className="text-2xl font-medium">Encountered error while loading google maps</p>
      <p className="text-center text-xl cursor-pointer border border-black px-4 py-2 rounded-2xl hover:opacity-70" onClick={goBack}>Go back</p>
    </div>
  );

  if (!scriptLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Image
          src="/icons/maps-icon.png"
          alt="google-maps-icon"
          width={50}
          height={50}
          className="h-auto"
          style={{ animation: "spinAndGlow 3s infinite linear" }}
          priority
        />
      </div>
    );
  }

  return children;
}