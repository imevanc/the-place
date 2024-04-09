import React, { useState, useEffect } from "react";

export const useScreenMatcher = (query: string) => {
  const [screenMatches, setScreenMatches] = useState<boolean>(false);
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    const resizeListener = () => setScreenMatches(media.matches);
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, [screenMatches, query]);
  return { screenMatches };
};
