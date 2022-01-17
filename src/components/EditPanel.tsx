import React from "react";
import { Button, Tooltip } from "@mui/material";
import { useStore } from "./store";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import PathEditor from "./PathEditor";

const EditPanel = () => {
  const {
    global: { clear, svgScale, setSvgScale },
  } = useStore();
  return (
    <div>
      <div className="p-10">
        <div className="flex justify-end items-center mb-5 gap-4">
          <Tooltip title="Zoom SVG">
            <Stack spacing={2} direction="row" className="w-52">
              <ZoomOutIcon />
              <Slider
                aria-label="Zoom"
                value={svgScale}
                onChange={(e: any, value) => setSvgScale(value)}
                min={1}
                max={1.7}
                step={0.01}
                size="small"
                valueLabelDisplay="auto"
              />
              <ZoomInIcon />
            </Stack>
          </Tooltip>
          <Button variant="contained" onClick={() => clear()}>
            Clear
          </Button>
        </div>
        <PathEditor />
      </div>
    </div>
  );
};
export default EditPanel;
