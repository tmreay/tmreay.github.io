import React from "react";
import styled, { keyframes } from "styled-components";
import GridClipPath from "./GridClipPath";

const CLIP_PATH_ID = "dotGrid";

const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

const GradientBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: -1;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  clip-path: url(#${CLIP_PATH_ID});
`;


function GridGradientBackground() {
  return <>
    <GridClipPath id={CLIP_PATH_ID}/>
    <GradientBackground />
  </>
}

export default GridGradientBackground
