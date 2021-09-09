import React from "react";
import styled from "styled-components";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "./components/Button";
import headshot from "./static/images/headshot.jpg";
import GradientBody from "./components/GradientBody";

const Headshot = styled.img`
  width: 200px;
  height: 200px;
  clip-path: circle(100px at center);
  box-shadow: 0px 0px 3px 3px #282a36;
`;

const Name = styled.h1``;

const Title = styled.h3`
  font-style: italic;
`;

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:last-child) {
    margin-right: 5px;
  }

  .MuiIconButton-root {
    color: white;
  }
`;

function App() {
  return (
      <GradientBody >
        <Headshot src={headshot} alt="headshot" />
        <Name>Thomas Reay</Name>
        <Title>Software Developer</Title>
        <ButtonBar>
          <Button title="Github" Icon={GitHubIcon} />
          <Button title="LinkedIn" Icon={LinkedInIcon} />
          <Button title="Resume" Icon={DescriptionIcon} />
        </ButtonBar>
      </GradientBody>
  );
}

export default App;
