"use client";

import { useEffect } from "react";
import { followingDotCursor } from "cursor-effects";

export default function CursorEffect() {
  useEffect(() => {
    const effect = new followingDotCursor({
      color: "#3232325b", // customize dot color here
    });

    return () => {
      effect.destroy();
    };
  }, []);

  return null;
}