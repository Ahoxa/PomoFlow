import React from "react";
import styled from "@emotion/styled";

const ProgressBarContainer = styled.div`
  width: 30vw;
  max-width: 400px;
  height: 20px;
  background-color: #e0e0de;
  border-radius: 10px;
  overflow: hidden;
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: #e60000;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <Filler completed={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
