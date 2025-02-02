'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Input } from "./ui/input";
import useDebounce from "@/lib/hooks/useDebounce";

export default function SearchBar() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [isListening, setIsListening] = useState(false);

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

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      toast.error("Your browser does not support voice input.", {
        id: "voice-input-not-supported",
      });
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any)["webkitSpeechRecognition"];
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchInput(transcript);
    };

    recognition.onerror = (event: Event) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.error("Speech recognition error:", (event as any).error);
      toast.error("Speech recognition error", {
        id: "speech-recognition-error",
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  }

  return (
    <div className="flex items-center border-2 border-gray-200 px-2 rounded-2xl flex-1 sm:max-w-96">
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
        placeholder="Type or use mic to search for a location"
      />
      <Image
        src={isListening ? "/icons/mic-off.svg" : "/icons/mic.svg"}
        alt="Voice Search"
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={handleVoiceInput}
      />
    </div>
  );
}