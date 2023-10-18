import React from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const ArrowBackIcon = ({ onClick }) => {
  const leftPosition = `min(40vw, 40px)`;
  return (
    <Box position="absolute" left={leftPosition} top="5vh" zIndex="2">
      <IconButton
        onClick={onClick}
        aria-label="Back"
        variant="ghost"
        colorScheme="red"
        icon={<ArrowLeftIcon boxSize="25px" />}
      />
    </Box>
  );
};

export default ArrowBackIcon;
