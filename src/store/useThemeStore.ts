import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create(
  persist<ThemeStore>(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "theme-storage",
    }
  )
);
