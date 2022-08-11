import { useEffect, useState } from "react";

export const useChangeTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("themeMode"));

  const toggleTheme = () => {
    theme === "light" ? setThemeMode("dark") : setThemeMode("light");
  }

  const setThemeMode = (mode) => {
    localStorage.setItem("themeMode", mode);
    setTheme(mode);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("themeMode");
    localTheme ? setThemeMode(localTheme) : setThemeMode("light");
  }, [])

  return [ theme, toggleTheme ];
}
