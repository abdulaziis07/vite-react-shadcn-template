import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  //defaultOptions: {}
})

type ReactQueryProviderComponentProps = {
  children: React.ReactNode;
}

export const ReactQueryProvider: React.FC<ReactQueryProviderComponentProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}