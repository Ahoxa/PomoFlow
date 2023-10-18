import React, { useEffect, useCallback } from "react";
import { HStack, Button, Image } from "@chakra-ui/react";
import useSound from "use-sound";
import air from "../sounds/Air.mp3";
import meow from "../sounds/meow.mp3";

const MusicButton = ({ isPlaying, setIsPlaying }) => {
  const toggleMusic = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }, [setIsPlaying]);
  const [play, { stop }] = useSound(air, { loop: true });
  const [playMeow] = useSound(meow);

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying, play, stop]);

  const playMeowSound = useCallback(() => {
    playMeow();
    console.log("meow");
  }, [playMeow]);

  return (
    <HStack position="absolute" mt={2} zIndex={1}>
      {isPlaying ? (
        <Button onClick={toggleMusic} aria-label="Play">
          <span className="material-symbols-outlined">music_note</span>
        </Button>
      ) : (
        <Button onClick={toggleMusic} aria-label="Stop">
          <span className="material-symbols-outlined">music_off</span>
        </Button>
      )}
      <Button onClick={playMeowSound} aria-label="meow">
        <Image src="nikukyu.svg" h={5} w={5} />
      </Button>
    </HStack>
  );
};

// export default MusicButton;
