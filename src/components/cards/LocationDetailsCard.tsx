import Image from "next/image";
import Link from "next/link";

import { ILocationDetailsCardProps } from "@/lib/types/props.type";

export default function LocationDetailsCard({ lat, lon, name, country }: ILocationDetailsCardProps) {
  return (
    <div className="w-72 h-28 bg-zinc-400/10 rounded-2xl p-2.5 backdrop-blur-sm flex justify-between sm:w-80">
      <div className="flex flex-col justify-between">
        <div className="text-sm font-normal">
          <p className="font-medium">Longitude: <span className="font-normal">{lon}</span></p>
          <p className="font-medium">Latitude: <span className="font-normal">{lat}</span></p>
        </div>
        <Link href={`/location/map?lat=${lat}&lon=${lon}`} className="flex gap-2 items-center hover:text-white">
          <Image
            src="/icons/maps-icon.png"
            alt="google-maps-icon"
            width={16}
            height={16}
            priority
          />
          <span>Find on Google Maps</span>
        </Link>
      </div>
      <div className="flex">
        <h4 className="font-medium">{name}, {country}</h4>
      </div>
    </div>
  );
}