"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

export default function ReactQueryProvider(props: ReactQueryProviderProps) {
  const { children } = props;
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
