"use client";
import { useState } from "react";

export function NightModeToggle({ onToggle }: { onToggle: (isNight: boolean) => void }) {
  const [night, setNight] = useState(false);

  const handleClick = () => {
    const newNight = !night;
    setNight(newNight);
    onToggle(newNight);
  };

  return (
    <img
      src={night ? "/imgs/light.png" : "/imgs/night.png"}
      alt="Toggle night mode"
      className="image-path"
      style={{ marginLeft: "1rem", cursor: "pointer", backgroundColor:'#8fbcbb'}}
      onClick={handleClick}
    />
  );
}