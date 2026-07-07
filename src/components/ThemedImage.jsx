"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";

// Swaps the portrait between the light and dark variants to match the theme,
// mirroring the reference build's theme-aware hero photo.
export default function ThemedImage({
  width = 380,
  height = 475,
  priority = false,
  className,
}) {
  const { theme } = useTheme();
  const src = theme === "dark" ? profile.photoDark : profile.photoLight;

  return (
    <Image
      src={src}
      alt={`Portrait of ${profile.name}`}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
