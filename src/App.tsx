import React from "react";
import styled from "styled-components";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "./components/Button";
import headshot from "./static/images/headshot.jpg";
import DotGrid from "./components/DotGrid";

const AppBody = styled.div`
  text-align: center;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Headshot = styled.img`
  width: 200px;
  height: 200px;
  clip-path: circle(100px at center);
`;

const Name = styled.h1`
  font-style: bold;
`;

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
    <>
      <DotGrid />
      <AppBody>
        <Headshot src={headshot} alt="headshot" />
        <Name>Thomas Reay</Name>
        <Title>Software Developer</Title>
        <ButtonBar>
          <Button title="Github" Icon={GitHubIcon} />
          <Button title="LinkedIn" Icon={LinkedInIcon} />
          <Button title="Resume" Icon={DescriptionIcon} />
        </ButtonBar>
      </AppBody>
    </>
  );
}

export default App;
