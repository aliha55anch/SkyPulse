import React from "react";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <div className="flex h-10 items-center justify-center gap-1.5">
      <LightModeIcon className={darkMode ? "text-slate-500" : "text-yellow-400"} />

      <Switch checked={darkMode} onChange={onToggle} />

      <DarkModeIcon className={darkMode ? "text-slate-100" : "text-slate-500"} />
    </div>
  );
}
