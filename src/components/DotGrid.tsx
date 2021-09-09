import React, { memo, useMemo } from "react";
import styled from "styled-components";
import { useWindowSize } from "../utils/hooks";

const AbsoluteSvg = styled.svg`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  z-index: -1;
`;

type DotGridProps = {
  radius?: number;
  space?: number;
  color?: string;
};

const DotGrid = ({ space = 16, radius = 1, color = "#FFFFFF40" }: DotGridProps) => {
  const [width, height] = useWindowSize();

  const centers = useMemo(() => {
    const [centerX, centerY] = [Math.floor(width / 2), Math.floor(height / 2)];
    const [stepX, stepY] = [Math.floor(space / 2), Math.sqrt(3) * space];
    const offsetY = stepY / 2;
    const newCenters = [];
    let xi = 0;
    for (let x = 0; x < centerX; x += stepX) {
      for (let y = xi % 2 === 0 ? 0 : offsetY; y < centerY; y += stepY) {
        const [intX, intY] = [Math.floor(x), Math.floor(y)];
        newCenters.push([intX + centerX, intY + centerY]);
        if (x !== 0) {
          newCenters.push([-intX + centerX, intY + centerY]);
        }
        if (y !== 0) {
          newCenters.push([intX + centerX, -intY + centerY]);
        }
        if (y !== 0 && x !== 0) {
          newCenters.push([-intX + centerX, -intY + centerY]);
        }
      }
      xi++;
    }
    return newCenters;
  }, [width, height, space]);

  return (
    <AbsoluteSvg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
    >
      <g fill={color}>
        {centers.map(([centerX, centerY]) => (
          <circle
            key={`${centerX}.${centerY}`}
            cx={centerX}
            cy={centerY}
            r={radius}
          />
        ))}
      </g>
    </AbsoluteSvg>
  );
};

export default memo(DotGrid);
