import LocationForecast from "@/components/LocationForecast";
import InstallPrompt from "@/components/pwa/InstallPrompt";
import PushNotificationManager from "@/components/pwa/PushNotificationManager";
import SearchBar from "@/components/SearchBar";
import SearchByLocation from "@/components/SearchByLocation";
import StoredCards from "@/components/StoredCards";
import { SearchParamsProps } from "@/lib/types/props.type";

export default async function Home({ searchParams }: SearchParamsProps) {
  const searchQuery = (await searchParams).search;

  return (
    <div className="min-h-screen bg-zinc-950 px-2 py-4 font-[family-name:var(--font-geist-sans)] sm:px-6 md:py-6 md:px-7">
      <header className="max-w-[75rem] mx-auto">
        <h1 className="text-3xl font-bold mt-2 mb-4 text-white md:text-4xl">
          Weather Forecast
        </h1>
      </header>
      <InstallPrompt />
      <section className="my-2 max-w-[75rem] mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <SearchBar />
        <PushNotificationManager />
      </section>
      {searchQuery ? (
        <section className="my-2 max-w-[75rem] mx-auto">
          <SearchByLocation
            searchQuery={typeof searchQuery === "string" ? searchQuery : ""}
          />
        </section>
      ) : (
        <main className="grid grid-cols-1 gap-4 my-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-[75rem] mx-auto">
          <LocationForecast />
          <StoredCards />
        </main>
      )}
    </div>
  );
}
