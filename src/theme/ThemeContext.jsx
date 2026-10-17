import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const readStored = () => {
  try {
    const t = localStorage.getItem("theme");
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
};

export function ThemeProvider({ children }) {
  // index.html already set data-theme before paint; start from that.
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Follow the OS setting until the visitor picks a mode themselves.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e) => {
      if (!readStored()) setTheme(e.matches ? "light" : "dark");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage unavailable — mode still switches for this visit */
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
