import React, { createContext, useContext, useState, useMemo } from "react";

const MusicContext = createContext();

export const useMusic = () => {
  return useContext(MusicContext);
};

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const contextValue = useMemo(() => {
    return { isPlaying, setIsPlaying };
  }, [isPlaying, setIsPlaying]);

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
};
