'use client';

import { Coord } from "@/lib/types/weather.type";
import { GoogleMap } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "100vh"
};

const defaultMapZoom = 16;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "hybrid",
};

export default function MapComponent({ lat, lon }: Coord) {
  const mapCenter = {
    lat,
    lng: lon
  };

  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={mapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  );
}