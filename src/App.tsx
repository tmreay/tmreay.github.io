import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";

import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Popper from "@material-ui/core/Popper";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import resume from "./static/pdfs/resume.pdf";
import headshot from "./static/images/headshot.jpg";

import particlesOptions from "./particles-options.json";

const ParticlesBackground = styled(Particles)`
  position: fixed;
  width: 100%;
  height 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InfoCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f8f8f2;

  padding: 24px;
  border: double 1px transparent;
  border-radius: 16px;
  background-image: linear-gradient(#282a36e6, #282a36e6),
                    linear-gradient(135deg, #ff79c680, #bd93f980);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

const Headshot = styled.img`
  width: 200px;
  height: 200px;
  clip-path: circle(100px at center);
`;

const Title = styled.h1`
  margin: 8px 0px;
`;

const ItalicH3 = styled.h3`
  margin: 8px 0px;
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
    <>
      <ParticlesBackground options={particlesOptions} />
      <AppBody>
        <InfoCard>
          <Headshot src={headshot} alt="headshot" />
          <Title>Thomas Reay</Title>
          <ItalicH3>Software Developer</ItalicH3>
          <ButtonBar>
            <TooltipButton
              title="Github"
              Icon={GitHubIcon}
              href="https://www.github.com/tmreay"
              target="_blank"
            />
            <TooltipButton
              title="LinkedIn"
              Icon={LinkedInIcon}
              href="https://www.linkedin.com/in/thomas-reay-722167103/"
              target="_blank"
            />
            <TooltipButton
              title="Email"
              Icon={Email}
              href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#104;&#111;&#109;&#097;&#115;&#114;&#101;&#097;&#121;&#046;&#105;&#110;&#102;&#111;"
              target="_blank"
            />
            <TooltipButton
              title="Resume"
              Icon={DescriptionIcon}
              href={resume}
              target="_blank"
            />
          </ButtonBar>
        </InfoCard>
      </AppBody>
    </>
  );
}

export default App;
