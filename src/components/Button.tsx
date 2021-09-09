import React from "react";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

function Button<C extends React.ElementType>({
  Icon,
  ...iconButtonProps
}: IconButtonProps<C, { component?: C }> & {
  Icon: React.ComponentType<SvgIconProps>;
}) {
  return (
    <IconButton {...iconButtonProps}>
      <Icon />
    </IconButton>
  );
}

export default Button;
