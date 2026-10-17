import { useTheme } from "../theme/ThemeContext";

const Sun = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
    <rect x="6" y="6" width="4" height="4" />
    <rect x="7" y="1" width="2" height="3" />
    <rect x="7" y="12" width="2" height="3" />
    <rect x="1" y="7" width="3" height="2" />
    <rect x="12" y="7" width="3" height="2" />
    <rect x="3" y="3" width="2" height="2" />
    <rect x="11" y="3" width="2" height="2" />
    <rect x="3" y="11" width="2" height="2" />
    <rect x="11" y="11" width="2" height="2" />
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M6 1h4v1H8v1H7v2H6v6h1v2h1v1h2v1H6v-1H4v-1H3v-2H2V5h1V3h1V2h2z" />
  </svg>
);

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`group relative flex items-center h-9 w-[76px] border-2 border-line bg-bg cursor-pointer ${className}`}
    >
      {/* sliding block */}
      <span
        className={`absolute top-[2px] bottom-[2px] w-[34px] bg-accent transition-[left] duration-300 ease-[cubic-bezier(.7,0,.3,1)] ${
          isDark ? "left-[36px] shadow-[0_0_12px_var(--accent)]" : "left-[2px]"
        }`}
      />
      <span
        className={`relative z-10 flex flex-1 justify-center transition-colors ${
          isDark ? "text-ink-muted" : "text-accent-ink"
        }`}
      >
        <Sun />
      </span>
      <span
        className={`relative z-10 flex flex-1 justify-center transition-colors ${
          isDark ? "text-accent-ink" : "text-ink-muted"
        }`}
      >
        <Moon />
      </span>
    </button>
  );
}
