"use client";

import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [localStore, setLocalStore] = useState<Storage | null>(null);


  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocalStore(localStorage);
      setLoading(false);
    }
  }, []);

  return {
    loading,
    localStore,
  };
};

export default useLocalStorage;
