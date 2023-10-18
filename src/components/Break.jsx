import React, { useEffect } from "react";
import useTimer from "../Helper/useTimer";
import { VStack, Box, Button } from "@chakra-ui/react";
import Coffee from "./3D/Coffee";
import ProgressBar from "./ProgressBar";
import ArrowBackIcon from "./ArrowBackIcon";

import useSound from "use-sound";
import startWork from "../sounds/startMeow.mp3";

const Break = ({
  remainingTime: globalRemainingTime,
  setRemainingTime: globalSetRemainingTime,
  totalTime,
  setTimerMode,
  workTime,
  handleBackClick,
}) => {
  const [localRemainingTime, localSetRemainingTime] = useTimer(totalTime, true);

  const [playStartWork] = useSound(startWork);
  useEffect(() => {
    if (localRemainingTime === 0) {
      playStartWork();
      globalSetRemainingTime(workTime);
      setTimerMode("work");
    }
    globalSetRemainingTime(localRemainingTime);
  }, [localRemainingTime]);

  const handleSkip = () => {
    localSetRemainingTime(0);
    globalSetRemainingTime(workTime);
    setTimerMode("work");
  };

  return (
    <VStack>
      <ArrowBackIcon onClick={handleBackClick} />

      <Box w="100vw" h="60vh">
        <Coffee />
      </Box>
      <ProgressBar remainingTime={localRemainingTime} totalTime={totalTime} />
      <Button onClick={handleSkip} colorScheme="yellow" mt={4}>
        Skip
      </Button>
    </VStack>
  );
};

export default Break;
