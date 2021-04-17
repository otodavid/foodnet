import { useEffect, useState } from "react";

export const useChangeTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const setThemeMode = (mode) => {
    setTheme(mode);
    localStorage.setItem("themeMode", mode);
  }

  useEffect(() => {
    const  localTheme = localStorage.getItem("themeMode");
    localTheme ? setThemeMode("light") : setThemeMode("dark");

   
    
    // return () => {
    //   // cleanup
    // }
  }, [theme])

  return [ theme, toggleTheme ];
}