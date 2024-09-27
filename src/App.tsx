import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { useEffect } from "react";
import ThemeSwitchButton from "./components/ThemeSwitchButton";
import Toaster from "./components/Toaster";
import { useThemeStore } from "./store/useThemeStore";

const queryClient = new QueryClient();

const App = () => {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <ThemeSwitchButton />
    </QueryClientProvider>
  );
};

export default App;
