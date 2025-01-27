'use client';

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "./ui/input";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
    const { value } = e.target
    if(value.trim()) {
      router.push(`?search=${e.target.value}`);
    } else {
      router.push("/");
    }
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
        value={searchParams.get("search") ?? ""}
      />
      <Image src={"/icons/mic.svg"} alt="Search-icon" width={20} height={20} />
    </div>
  );
}