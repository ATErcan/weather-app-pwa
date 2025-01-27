'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Input } from "./ui/input";
import useDebounce from "@/lib/hooks/useDebounce";

export default function SearchBar() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const debouncedSearch = useDebounce(searchInput, 500);

  useEffect(() => {
    if (debouncedSearch.trim()) {
      router.push(`?search=${debouncedSearch.trim()}`);
    } else {
      router.push("/");
    }
  }, [debouncedSearch, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
    setSearchInput(e.target.value);
  }
  return (
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
        onChange={handleChange}
        value={searchInput}
      />
      <Image src={"/icons/mic.svg"} alt="Search-icon" width={20} height={20} />
    </div>
  );
}