import Image from "next/image";

import { IWeatherDetailsCardProps } from "@/lib/types/props.type";

export default function WeatherDetailsCard({
  icon,
  title,
  measure,
  desc,
}: IWeatherDetailsCardProps) {
  return (
    <div className="w-36 h-36 bg-zinc-400/10 rounded-2xl flex flex-col justify-between p-2.5 backdrop-blur-sm sm:w-40 sm:h-40">
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <Image
            src={`/icons/${icon}.svg`}
            alt="Temparature-icon"
            width={15}
            height={15}
          />
          <h3 className="ml-1 text-xs text-zinc-700 uppercase">{title}</h3>
        </div>
        <p className="text-medium text-2xl">{measure}</p>
      </div>
      <p className="text-xs">{desc}</p>
    </div>
  );
}