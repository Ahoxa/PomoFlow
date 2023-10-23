import React, { useState, useEffect } from "react";
import { VStack, Box, Button, Image } from "@chakra-ui/react";

import useTimer from "../../Helper/useTimer";
import Cat from "../3D/Cat";
import ProgressBar from "../ProgressBar";
import ArrowBackIcon from "../ArrowBackIcon";
import BackAlert from "../BackAlert";

import useSound from "use-sound";
import meow from "../../sounds/meow.mp3";
import gong from "../../sounds/gong.mp3";

const Work = ({
  remainingTime,
  setRemainingTime,
  totalTime,
  setTimerMode,
  breakTime,
  handleBackClick,
}) => {
  const [isRunning, setIsRunning] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [playMeow] = useSound(meow);
  const [playGong] = useSound(gong);

  const toggleTimer = () => setIsRunning(!isRunning);
  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => setIsAlertOpen(false);
  const handleConfirm = () => {
    handleBackClick();
    closeAlert();
  };
  const [localRemainingTime, localSetRemainingTime] = useTimer(
    totalTime,
    isRunning
  );

  useEffect(() => {
    setRemainingTime(localRemainingTime);

    if (localRemainingTime === 0) {
      playGong();
      setRemainingTime(breakTime);
      setTimerMode("break");
    }
  }, [localRemainingTime]);

  return (
    <>
      <VStack>
        <ArrowBackIcon onClick={openAlert} />
        <Button
          onClick={playMeow}
          aria-label="meow"
          position="absolute"
          mt={2}
          zIndex={1}
        >
          <Image src="nikukyu.svg" h={5} w={5} />
        </Button>
        <Box w="100vw" h="60vh">
          <Cat />
        </Box>
        <ProgressBar remainingTime={remainingTime} totalTime={totalTime} />
        {isRunning ? (
          <Button onClick={toggleTimer} colorScheme="red" mt={4}>
            Pause
          </Button>
        ) : (
          <Button onClick={toggleTimer} colorScheme="green" mt={4}>
            Resume
          </Button>
        )}
      </VStack>
      <BackAlert
        isOpen={isAlertOpen}
        onClose={closeAlert}
        onConfirm={handleConfirm}
        zIndex="1000"
      />
    </>
  );
};

export default Work;
