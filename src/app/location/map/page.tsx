import MapComponent from "@/components/MapComponent";
import { SearchParamsProps } from "@/lib/types/props.type";

export default async function Map({ searchParams }: SearchParamsProps) {
  const { lon, lat } = await searchParams;

  // TODO: create a invalid Location UI
  if (!lon || !lat || Array.isArray(lon) || Array.isArray(lat)) {
    return null;
  }

  return <MapComponent lon={parseFloat(lon)} lat={parseFloat(lat)} />;
}