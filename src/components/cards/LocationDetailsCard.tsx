import { ILocationDetailsCardProps } from "@/lib/types/props.type";

export default function LocationDetailsCard({ lat, lon, name, country }: ILocationDetailsCardProps) {
  return (
    <div className="w-72 h-28 bg-zinc-400/10 rounded-2xl p-2.5 backdrop-blur-sm flex justify-between">
      <div className="text-sm font-normal">
        <p className="font-medium">Longitude: <span className="font-normal">{lon}</span></p>
        <p className="font-medium">Latitude: <span className="font-normal">{lat}</span></p>
      </div>
      <div className="flex">
        <h4 className="self-end font-medium">{name}, {country}</h4>
      </div>
    </div>
  );
}