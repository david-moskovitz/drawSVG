import React from "react";
import { useStore } from "./store";

const DrawGrig = () => {
  const {
    global: { viewBox, gridColor, gridStrokeWidth },
  } = useStore();
  return (
    <g>
      {[...Array(viewBox.width / 10)].map((_, i) => (
        <line
          key={i}
          x1={i * 10}
          x2={i * 10}
          y1={0}
          y2={viewBox.width}
          stroke={gridColor}
          strokeWidth={gridStrokeWidth}
        />
      ))}
      {[...Array(viewBox.height / 10)].map((_, i) => (
        <line
          key={i}
          y1={i * 10}
          y2={i * 10}
          x1={0}
          x2={viewBox.height}
          stroke={gridColor}
          strokeWidth={gridStrokeWidth}
        />
      ))}
    </g>
  );
};
export default DrawGrig;
