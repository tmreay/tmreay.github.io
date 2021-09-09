import React, { useMemo } from "react";
import { useWindowSize } from "../utils/hooks";

type GridClipPathProps = {
  id: string;
  radius?: number;
  space?: number;
};

function GridClipPath({ id, space = 24, radius = 1 }: GridClipPathProps) {
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
    <svg width="0" height="0" style={{ display: "inherit" }}>
      <defs>
        <clipPath id={id}>
          {centers.map(([centerX, centerY]) => (
            <circle
              key={`${centerX}.${centerY}`}
              cx={centerX}
              cy={centerY}
              r={radius}
            />
          ))}
        </clipPath>
      </defs>
    </svg>
  );
}

export default GridClipPath;
