import ForecastByCoord from "@/components/ForecastByCoord";
import { getForecastByLocation } from "@/lib/tools/api";
import { SearchParamsProps } from "@/lib/types/props.type";

export default async function Location({ searchParams }: SearchParamsProps) {
  const { lon, lat } = await searchParams;

  // TODO: create a invalid Location UI
  if(!lon || !lat || Array.isArray(lon) || Array.isArray(lat)) {
    return null;
  }

  const data = await getForecastByLocation({ lon: parseFloat(lon), lat: parseFloat(lat) });
  return (
    <ForecastByCoord data={data} />
  )
}