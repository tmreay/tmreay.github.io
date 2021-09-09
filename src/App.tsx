import React, { useState } from "react";
import styled from "styled-components";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "./components/Button";
import headshot from "./static/images/headshot.jpg";
import GridGradientBackground from "./components/GridGradientBackground";
import PDFOverlay from "./components/PDFOverlay";
import resume from "./static/pdfs/resume.pdf";

const AppBody = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f8f8f2;

  background-color: #282a36;
  border-radius: 2px;
`;

const Headshot = styled.img`
  width: 200px;
  height: 200px;
  clip-path: circle(100px at center);
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
    color: #f8f8f2;
  }
`;

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prevOpen) => !prevOpen);

  return (
    <AppBody>
      <GridGradientBackground />
      <InfoCard>
        <Headshot src={headshot} alt="headshot" />
        <Name>Thomas Reay</Name>
        <Title>Software Developer</Title>
        <ButtonBar>
          <Button
            title="Github"
            Icon={GitHubIcon}
            href="https://www.github.com"
          />
          <Button
            title="LinkedIn"
            Icon={LinkedInIcon}
            href="https://www.linkedin.com"
          />
          <Button title="Resume" Icon={DescriptionIcon} onClick={toggleOpen} />
        </ButtonBar>
      </InfoCard>
      <PDFOverlay pdf={resume} open={open} toggleOpen={toggleOpen} />
    </AppBody>
  );
}

export default App;
