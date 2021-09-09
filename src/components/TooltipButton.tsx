import React from "react";
import styled from "styled-components";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Popper from "@material-ui/core/Popper";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

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

export default TooltipButton;
