import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
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

type ButtonProps = {
  title: string;
  Icon: React.ComponentType<SvgIconProps>;
  onClick?: () => void;
};

function Button({ title, Icon, onClick }: ButtonProps) {
  return (
    <Tooltip
      PopperComponent={CustomPopper}
      title={title}
      arrow
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      <IconButton>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}

export default Button;
