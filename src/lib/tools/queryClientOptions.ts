import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 15s
      gcTime: 30 * 60 * 1000, // 30min; garbage collection time
    },
  },
});

export default queryClient;