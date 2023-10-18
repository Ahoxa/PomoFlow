import React, { useState } from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import Break from "./components/Break";
import { cardData } from "./data/cardData";
import useTimer from "./Helper/useTimer";
import { MusicProvider } from "./contexts/MusicContexts";

function App() {
  const [timerMode, setTimerMode] = useState("home"); // "home","work","break"
  const [selectedCard, setSelectedCard] = useState(null);
  const [remainingTime, setRemainingTime] = useTimer(0);
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setWorkTime(card.workTime * 60);
    setBreakTime(card.breakTime * 60);
    setRemainingTime(card.workTime * 60);
    setTimerMode("work");
  };

  const handleBackClick = () => {
    setRemainingTime(0);
    setTimerMode("home");
  };

  return (
    <MusicProvider>
      {timerMode === "home" && (
        <Home handleCardClick={handleCardClick} cardData={cardData} />
      )}
      {timerMode === "work" && (
        <Work
          handleBackClick={handleBackClick}
          remainingTime={remainingTime}
          setRemainingTime={setRemainingTime}
          totalTime={selectedCard?.workTime * 60 || 0}
          setTimerMode={setTimerMode}
          breakTime={breakTime}
        />
      )}
      {timerMode === "break" && (
        <Break
          handleBackClick={handleBackClick}
          remainingTime={remainingTime}
          setRemainingTime={setRemainingTime}
          totalTime={selectedCard?.breakTime * 60 || 0}
          setTimerMode={setTimerMode}
          workTime={workTime}
        />
      )}
    </MusicProvider>
  );
}

export default App;
