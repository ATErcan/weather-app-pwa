import Link from "next/link";

import { Location } from "@/lib/types/location.type";

export default function SearchResult({ location }: { location: Location}) {
  const { lat, lon, country, name, state } = location;
  return (
    <li>
      <Link
        href={`/location?lat=${lat}&lon=${lon}`}
        className="block py-3 px-4 hover:bg-zinc-800"
      >
        {name}, {state && state}, {country}
      </Link>
    </li>
  );
}