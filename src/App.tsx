import React from "react";
import styled from "styled-components";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Popper from "@material-ui/core/Popper";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import resume from "./static/pdfs/resume.pdf";
import headshot from "./static/images/headshot.jpg";

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

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:last-child) {
    margin-right: 8px;
  }

  .MuiIconButton-root {
    color: #f8f8f2;
  }
`;

const CustomPopper = styled(Popper)`
  .MuiTooltip-tooltip {
    font-family: inherit;
    background-color: #44475a;
  }
  .MuiTooltip-arrow {
    color: #44475a;
  }
`;

function TooltipButton<C extends React.ElementType>({
  title,
  Icon,
  ...iconButtonProps
}: IconButtonProps<C, { component?: C }> & {
  title: string;
  Icon: React.ComponentType<SvgIconProps>;
}) {
  return (
    <Tooltip PopperComponent={CustomPopper} title={title} arrow>
      <IconButton {...iconButtonProps}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}

function App() {
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
            href={resume}
            target="blank"
          />
        </ButtonBar>
      </InfoCard>
    </AppBody>
  );
}

export default App;
