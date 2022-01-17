import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useCopyToClipboard from "react-use/esm/useCopyToClipboard";
import AutosizeInput from "react-input-autosize";
import { useStore } from "./store";
import DraggableLabel from "./DraggableLabel";

const ToolBar = ({ isDark, setIsDark }: any) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const editor = document.getElementById("editor-ref");
  return (
    <div className="flex justify-end">
      <Tooltip title="Toggle dark mode">
        <IconButton size="small" onClick={() => setIsDark(!isDark)}>
          <Brightness4Icon htmlColor={isDark ? "white" : "black"} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Copy to clipboard">
        <IconButton
          size="small"
          onClick={() => copyToClipboard(editor?.textContent || "")}
        >
          <ContentCopyIcon htmlColor={isDark ? "white" : "black"} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

const ColorWord = ({ color, word }: any) => (
  <span className={`${color || ""}`}>{word || null}</span>
);

const PathEditor = () => {
  const [isDark, setIsDark] = React.useState(true);
  const {
    path: {
      path,
      setPath,
      pathWidth,
      setPathWidth,
      pathColor,
      setPathColor,
      pathFill,
      setPathFill,
    },
  } = useStore();

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="p-1 rounded-md dark:bg-slate-800 bg-slate-100">
        <ToolBar isDark={isDark} setIsDark={setIsDark} />
        <div id="editor-ref" className="p-4">
          <div>
            <ColorWord
              color={isDark ? "text-gray-200" : "text-gray-700"}
              word="<"
            />
            <ColorWord color="text-red-500" word="path" />
          </div>
          <div className="pl-6">
            <ColorWord color="text-orange-500" word="d" />
            <ColorWord
              color={isDark ? "text-gray-200" : "text-gray-700"}
              word="="
            />
            <ColorWord color="text-green-500" word='"' />
            {path.map((p: any, i: number) => (
              <>
                <ColorWord color="text-green-500" word={p.type} />
                {p.type === "Z" ? null : (
                  <>
                    <AutosizeInput
                      value={p?.x}
                      type="number"
                      onChange={(e) => setPath(e.target.value, "x", i)}
                      className="text-green-500 just-to-remove-the-bg"
                    />
                    <ColorWord color="text-green-500" word="," />

                    <AutosizeInput
                      value={p?.y}
                      type="number"
                      onChange={(e) => setPath(e.target.value, "y", i)}
                      className="text-green-500 just-to-remove-the-bg"
                    />
                    <ColorWord color="text-green-500" word=" " />
                  </>
                )}
              </>
            ))}
            <ColorWord color="text-green-500" word='"' />
          </div>
          <div className="pl-6">
            <ColorWord color="text-orange-500" word="fill" />
            <ColorWord
              color={isDark ? "text-gray-200" : "text-gray-700"}
              word="="
            />
            <ColorWord color="text-green-500" word='"' />
            <input
              type="color"
              value={pathFill}
              onChange={(e) => setPathFill(e.target.value)}
            />
            <ColorWord color="text-green-500" word='"' />
          </div>
          <div className="pl-6">
            <ColorWord color="text-orange-500" word="stroke" />
            <ColorWord
              color={isDark ? "text-gray-200" : "text-gray-700"}
              word="="
            />
            <ColorWord color="text-green-500" word='"' />
            <input
              type="color"
              value={pathColor}
              onChange={(e) => setPathColor(e.target.value)}
            />
            <ColorWord color="text-green-500" word='"' />
          </div>
          <div className="pl-6">
            <DraggableLabel
              label="stroke-width"
              value={pathWidth}
              setValue={setPathWidth}
              className="text-orange-500"
            />
            <ColorWord
              color={isDark ? "text-gray-200" : "text-gray-700"}
              word="="
            />
            <ColorWord color="text-green-500" word='"' />
            <ColorWord color="text-green-500" word={pathWidth} />
            <ColorWord color="text-green-500" word='"' />
          </div>
          <ColorWord color=" " word=" " />
          <ColorWord
            color={isDark ? "text-gray-200" : "text-gray-700"}
            word="/>"
          />
        </div>
      </div>
    </div>
  );
};
export default PathEditor;
