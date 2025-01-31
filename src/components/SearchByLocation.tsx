'use client';

import { useSearchByLocation } from "@/lib/tools/queries";
import SearchResult from "./SearchResult";
import Spinner from "./ui/Spinner";

export default function SearchByLocation({ searchQuery }: { searchQuery: string }) {
  const { data, isLoading } = useSearchByLocation(searchQuery);

  if(isLoading) {
    return (
      <div className="w-full sm:max-w-96 h-72 flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

  return (
    <ul className="text-white list-none flex flex-col w-full sm:max-w-96">
      {data?.length === 0 ? (
        <li className="block py-3 px-4">- No result -</li>
      ) : (
        data?.map((location, index) => (
          <SearchResult
            key={`${location.lat}-${location.lon}-${index}`}
            location={location}
          />
        ))
      )}
    </ul>
  );
}