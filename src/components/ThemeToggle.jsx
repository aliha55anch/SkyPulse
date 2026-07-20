import React from "react";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggle() {
  return (
    <div className="flex h-10 items-center justify-center gap-1.5">
      <LightModeIcon className="text-yellow-400" />

      <Switch />

      <DarkModeIcon className="text-slate-300" />
    </div>
  );
}