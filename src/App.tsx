import React, { useState } from "react";
import styled from "styled-components";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TooltipButton from "./components/TooltipButton";
import headshot from "./static/images/headshot.jpg";
import PDFOverlay from "./components/PDFOverlay";
import resume from "./static/pdfs/resume.pdf";
import ButtonBar from "./components/ButtonBar";

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

const ItalicH3 = styled.h3`
  font-style: italic;
`;

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prevOpen) => !prevOpen);

  return (
    <AppBody>
      <InfoCard>
        <Headshot src={headshot} alt="headshot" />
        <h1>Thomas Reay</h1>
        <ItalicH3>Software Developer</ItalicH3>
        <ButtonBar>
          <TooltipButton
            title="Github"
            Icon={GitHubIcon}
            href="https://www.github.com"
          />
          <TooltipButton
            title="LinkedIn"
            Icon={LinkedInIcon}
            href="https://www.linkedin.com"
          />
          <TooltipButton
            title="Resume"
            Icon={DescriptionIcon}
            onClick={toggleOpen}
          />
        </ButtonBar>
      </InfoCard>
      <PDFOverlay pdf={resume} open={open} toggleOpen={toggleOpen} />
    </AppBody>
  );
}

export default App;
