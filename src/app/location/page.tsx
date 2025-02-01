import { notFound } from "next/navigation";

import ForecastByCoord from "@/components/ForecastByCoord";
import { getForecastByLocation } from "@/lib/tools/api";
import { SearchParamsProps } from "@/lib/types/props.type";

export default async function Location({ searchParams }: SearchParamsProps) {
  const { lon, lat } = await searchParams;

  if(!lon || !lat || Array.isArray(lon) || Array.isArray(lat)) {
    notFound();
  }

  const data = await getForecastByLocation({ lon: parseFloat(lon), lat: parseFloat(lat) });
  return (
    <ForecastByCoord data={data} />
  )
}