import { notFound } from "next/navigation";

import MapComponent from "@/components/MapComponent";
import { SearchParamsProps } from "@/lib/types/props.type";

export default async function Map({ searchParams }: SearchParamsProps) {
  const { lon, lat } = await searchParams;

  if (!lon || !lat || Array.isArray(lon) || Array.isArray(lat)) {
    notFound();
  }

  return <MapComponent lon={parseFloat(lon)} lat={parseFloat(lat)} />;
}