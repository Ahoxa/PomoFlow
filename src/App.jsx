import "./index.css";
import React, { useState } from "react";
import { Box, HStack, Center, Text, IconButton } from "@chakra-ui/react";
import PomodoroCard from "./components/PodoroCard";
import { cardData } from "./data/cardData";
import DrawCanvas from "./components/3D/DrawCanvas";
import Timer from "./components/Timer";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowLeftIcon } from "@chakra-ui/icons";

const MotionHStack = motion(HStack);

function App() {
  const [activeCard, setActiveCard] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const [timeDuration, setTimeDuration] = useState(0);
  const [showCards, setShowCards] = useState(true);

  const [timerMode, setTimerMode] = useState("work"); // home, work, break

  const handleCardClick = (card) => {
    setActiveCard(card.id);
    setTimeDuration(card.workTime * 60);
    setShowTimer(true);
    setShowCards(false);
  };

  const handleBackClick = () => {
    setShowCards(true);
    setShowTimer(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: "50vh" },
    visible: { opacity: 1, y: "0vh" },
    exit: { opacity: 0, y: "50vh" },
  };

  return (
    <>
      <Box position="relative" h={showTimer ? "60vh" : "50vh"}>
        {showCards === false && (
          <IconButton
            icon={<ArrowLeftIcon />}
            position="absolute"
            top="5%"
            left="5%"
            zIndex={1}
            onClick={handleBackClick}
          />
        )}
        <Center h="100%" mt="5%">
          <DrawCanvas showTimer={showTimer} />
        </Center>
      </Box>

      <Box h={showTimer ? "40vh" : "50vh"} mt={showTimer ? "10vh" : "0"}>
        {showTimer ? (
          <Timer initialTime={timeDuration} onEnd={() => setShowTimer(false)} />
        ) : (
          <>
            {showCards ? (
              <Center>
                <Text fontSize="3rem" fontFamily="Nunito">
                  Let's do it.
                </Text>
              </Center>
            ) : null}
            <Center>
              <AnimatePresence initial={false}>
                {showCards && (
                  <MotionHStack
                    h="auto"
                    w="80vw"
                    maxW="700px"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={cardVariants}
                    transition={{ duration: 0.5 }}
                  >
                    {cardData.map((card) => (
                      <PomodoroCard
                        key={card.id}
                        data={card}
                        setActiveCard={() => handleCardClick(card)}
                      />
                    ))}
                  </MotionHStack>
                )}
              </AnimatePresence>
            </Center>
          </>
        )}
      </Box>
    </>
  );
}

export default App;
