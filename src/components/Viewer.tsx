import React from "react";
import DrawGrig from "./DrawGrig";

import { useStore } from "./store";
import { joinPath } from "./utils";

const Viewer = () => {
  const {
    global: { viewBox, svgScale },
    path: { path, pathWidth, pathColor, pathFill },
  } = useStore();
  return (
    <div>
      <div className="m-5">
        <svg
          transform={`scale(${svgScale})`}
          style={{
            transformOrigin: "0 0",
          }}
          height={viewBox.height}
          width={viewBox.Width}
          viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
          className="border-2 border-blue-600 "
        >
          <DrawGrig />
          <path
            id="path"
            d={joinPath(path)}
            stroke={pathColor}
            fill={pathFill}
            strokeWidth={pathWidth}
          />
        </svg>
      </div>
    </div>
  );
};
export default Viewer;
