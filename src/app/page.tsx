import Image from "next/image";

import LocationForecast from "@/components/LocationForecast";
import { Input } from "@/components/ui/input";

export default async function Home() {

  return (
    <div className="min-h-screen bg-zinc-950 px-2 py-4 font-[family-name:var(--font-geist-sans)] sm:px-6 md:py-6 md:px-7">
      <header className="max-w-[75rem] mx-auto">
        <h1 className="text-3xl font-bold mt-2 mb-4 text-white">
          Weather Forecast
        </h1>
      </header>
      <section className="my-2 max-w-[75rem] mx-auto">
        <div className="flex items-center border-2 border-gray-200 px-2 rounded-2xl sm:max-w-96">
          <Image
            src={"/icons/search.svg"}
            alt="Search-icon"
            width={20}
            height={20}
            />
          <Input
            name="search"
            className="border-none text-white focus-visible:ring-0"
            />
          <Image
            src={"/icons/mic.svg"}
            alt="Search-icon"
            width={20}
            height={20}
          />
        </div>
      </section>
      <main className="grid grid-cols-1 gap-4 my-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-[75rem] mx-auto">
        <LocationForecast />
        <LocationForecast />
        <LocationForecast />
        <LocationForecast />
        <LocationForecast />
      </main>
    </div>
  );
}
