'use client';

import useDebounce from "@/lib/hooks/useDebounce";
import { useSearchByLocation } from "@/lib/tools/queries";
import SearchResult from "./SearchResult";
import Spinner from "./ui/Spinner";

export default function SearchByLocation({ searchQuery }: { searchQuery: string }) {
  const debouncedSearch = useDebounce(searchQuery.trim(), 1000);
  const { data, isLoading } = useSearchByLocation(debouncedSearch);

  if(isLoading) {
    return (
      <div className="w-full sm:max-w-96 h-72 flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

  return (
      <ul className="text-white list-none flex flex-col w-full sm:max-w-96">
        {data?.map(location => (
          <SearchResult key={`${location.lat}-${location.lon}`} location={location} />
        ))}
      </ul>
  );
}