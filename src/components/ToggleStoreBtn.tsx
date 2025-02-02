'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import { IToggleStoreBtnProps } from "@/lib/types/props.type";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { useQueryClient } from "@tanstack/react-query";
import ToggleBtnSkeleton from "./ui/skeletons/ToggleBtnSkeleton";

export default function ToggleStoreBtn({ lon, lat, id }: IToggleStoreBtnProps) {
  const { loading, localStore } = useLocalStorage();
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const queryClient = useQueryClient();
  
  useEffect(() => {
    const store = localStore?.getItem("locations");
    const locations: IToggleStoreBtnProps[] = store ? JSON.parse(store) : [];
    const exists = locations?.some((location) => location.id === id);

    setIsAdded(exists);
  }, [localStore, id]);

  if (loading) {
    return <ToggleBtnSkeleton />
  }

  const toggleLocation = ({ lon, lat, id }: IToggleStoreBtnProps) => {
    const store = localStore?.getItem("locations");
    let locations: IToggleStoreBtnProps[] = store ? JSON.parse(store) : [];

    if(isAdded) {
      locations = locations.filter((location) => location.id !== id);
    } else {
      locations.push({ lon, lat, id });
    }
    localStore?.setItem("locations", JSON.stringify(locations));
    queryClient.invalidateQueries({ queryKey: ["stored_locations"] });
    
    setIsAdded(!isAdded);
    toast.success(isAdded ? "Forecast removed from home page!" : "Forecast added to home page!");
  }

  return (
    <div
      className="w-10 h-10 flex justify-center items-center p-1 bg-zinc-400/30 backdrop-blur-sm rounded-full cursor-pointer hover:opacity-80"
      onClick={() => toggleLocation({ lon, lat, id })}
    >
      <Image
        src={isAdded ? "/icons/minus.svg" : "/icons/plus.svg"}
        alt={isAdded ? "minus-icon" : "plus-icon"}
        width={32}
        height={32}
      />
    </div>
  );
}