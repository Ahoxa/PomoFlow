import React, { useState, useEffect } from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";

const Timer = ({ initialTime, onEnd }) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    if (seconds === 0) {
      onEnd();
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, onEnd, isPaused]);

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Text fontFamily="Nunito, san-serif" fontSize="1.5rem">
        {Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0")}
        :{(seconds % 60).toString().padStart(2, "0")}
      </Text>
      <Flex alignItems="center">
        <ProgressBar
          percentage={((initialTime - seconds) / initialTime) * 100}
        />
        <Button onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? (
            <span
              className="material-symbols-outlined"
              style={{ padding: "1px" }}
            >
              Resume
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              style={{ padding: "1px" }}
            >
              Pause
            </span>
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default Timer;
