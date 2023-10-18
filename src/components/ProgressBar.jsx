import React from "react";
import styled from "styled-components";
import Timer from "./Timer";

const Wrapper = styled.div`
  margin-top: min(4vw, 15px);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: min(25vw, 250px);
  height: min(25vw, 250px);
  background-color: #e0e0e0;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
`;

const CircleBackground = styled.circle`
  stroke-width: 7;
  fill: none;
  stroke: #ddd;
`;

const CircleProgress = styled.circle`
  stroke-width: 7;
  fill: none;
  stroke: tomato;
  stroke-linecap: round;
`;

const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const InnerCircle = styled.div`
  width: 86%;
  height: 86%;
  background-color: #FFEDD8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);
`;

const ProgressBar = ({ remainingTime, totalTime }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = ((totalTime - remainingTime) / totalTime) * circumference;

  return (
    <Wrapper>
      <Svg viewBox="0 0 150 150">
        <CircleBackground r={radius} cx="75" cy="75" />
        <CircleProgress
          r={radius}
          cx="75"
          cy="75"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </Svg>
      <InnerCircle>
        <Timer remainingTime={remainingTime} />
      </InnerCircle>
    </Wrapper>
  );
};

export default ProgressBar;
