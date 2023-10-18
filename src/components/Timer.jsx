import React from "react";
import { Text } from "@chakra-ui/react";

const Timer = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  return (
    <Text fontSize="3em" fontFamily="Nunito">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </Text>
  );
};

export default Timer;
