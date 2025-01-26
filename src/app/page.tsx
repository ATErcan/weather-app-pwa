import Image from "next/image";

import LocationForecast from "@/components/LocationForecast";
import { Input } from "@/components/ui/input";
import { getForecastByCity } from "@/lib/tools/api";
import { getCurrentTime } from "@/utils/helperFunctions";

export default async function Home() {
  const data = await getForecastByCity("Warsaw");

  const time = getCurrentTime(data);
  return (
    <div className="min-h-screen px-2 py-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="text-3xl font-bold my-2 text-gray-800">
          Weather Forecast
        </h1>
      </header>
      <section className="flex items-center border-2 border-gray-200 px-2 rounded-2xl my-2">
        <Image
          src={"/icons/search.svg"}
          alt="Search-icon"
          width={20}
          height={20}
        />
        <Input name="search" className="border-none focus-visible:ring-0" />
        <Image
          src={"/icons/mic.svg"}
          alt="Search-icon"
          width={20}
          height={20}
        />
      </section>
      <main className="flex flex-col gap-8 my-4 row-start-2 sm:items-start">
        <LocationForecast />
      </main>
    </div>
  );
}
