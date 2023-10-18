import { useState, useEffect } from "react";

const useTimer = (initialTime, isRunning) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    if (!isRunning) return; // 一時停止中は実行しない

    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) return prevTime - 1;
        clearInterval(timerId);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  useEffect(() => {
    setRemainingTime(initialTime);
  }, [initialTime]);

  return [remainingTime, setRemainingTime];
};

export default useTimer;
