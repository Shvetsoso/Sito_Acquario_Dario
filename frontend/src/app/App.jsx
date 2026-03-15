import { RouterProvider } from "react-router";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
    </RouterProvider>
  );
}
