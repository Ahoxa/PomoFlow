import React from "react";
import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import Header from "../Header";
import Tomato from "../3D/Tomato";
import PomodoroCard from "../PodoroCard";
import { cardData } from "../../data/cardData";

const Home = ({ handleCardClick }) => {
  return (
    <VStack h="100vh">
      <Header /> //5vh
      <Box w="100vw" h="45vh">
        <Tomato />
      </Box>  
      <Text fontSize="3rem" fontFamily="Nunito">
        Let's do it.
      </Text>
      <HStack w="70vw" maxW="800px" h="40vh">
        {cardData.map((card) => (
          <PomodoroCard
            key={card.id}
            data={card}
            setActiveCard={() => handleCardClick(card)}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default Home;
