import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { cardShadow } from "../Helper/Neumorphism/cardShadow";
import { circleShadow } from "../Helper/Neumorphism/circleShadow";

const PodoroCard = ({ data, setActiveCard }) => {
  return (
    <Box
      {...cardShadow(data.backgroundColor)}
      boxShadow="10px 10px 8px #EEDECA, -7px -7px 10px #FCF3E8"
      p={{ base: 2, md: 4 }}
      m={{ base: 2, md: 4 }}
      width="80%"
      borderRadius="3xl"
      position="relative"
      onClick={() => setActiveCard(data.id)}
      _before={{
        content: '""',
        display: "block",
        paddingTop: "150%",
      }}
      transition="all 0.3s ease-out"
      _hover={{
        transform: "translateY(-5px) scale(1.005) translateZ(0)",
        boxShadow: "0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(255, 235, 197, 0.48)"
      }}
    >
      <Box position="absolute" top="0" left="0" right="0" bottom="0">
        <Center
          {...circleShadow(data.textWrapperColor)}
          height={{ base: "45%" }}
          width={{ base: "60%" }}
          borderRadius="50%"
          position="absolute"
          top="35%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Text
            textAlign="center"
            fontSize={{ base: "200%" }}
            fontWeight="300"
            fontFamily="Nunito"
            textColor={data.textColor}
          >
            {data.workTime}
          </Text>
        </Center>
        <Center
          position="absolute"
          top="80%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Text
            textAlign="center"
            fontSize={{ base: "200%", MaxFontSize: "40" }}
            fontWeight="500"
            fontFamily="Nunito, sans-serif"
            textColor={data.textColor}
          >
            {data.title}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};

export default PodoroCard;
