import React from "react";

const storeContext = React.createContext<any>({});

export const useStore = () => React.useContext(storeContext);

const StoreProvider = ({ children }: any) => {
  const [viewBox, setViewBox] = React.useState({
    width: 500,
    height: 500,
  });
  const [svgScale, setSvgScale] = React.useState(1.5);
  const [gridColor, setGridColor] = React.useState("blue");
  const [gridStrokeWidth, setGridStrokeWidth] = React.useState(0.05);
  const [pathColor, setPathColor] = React.useState("rgb(0, 0, 0)");
  const [pathFill, setPathFill] = React.useState("#BD34FE");
  const [pathWidth, setPathWidth] = React.useState(1);
  const initialPath = [
    {
      type: "M",
      x: 0,
      y: 0,
    },
    {
      type: "L",
      x: 100,
      y: 100,
    },
    {
      type: "L",
      x: 200,
      y: 200,
    },
    {
      type: "Z",
      x: null,
      y: null,
    },
  ];
  const [path, setPaths] = React.useState<any>(initialPath);

  const clear = () => {
    setPaths(initialPath);
    setViewBox({
      width: 500,
      height: 500,
    });
    setSvgScale(1.5);
    setGridColor("blue");
    setGridStrokeWidth(0.05);
    setPathColor("rgb(0, 0, 0)");
    setPathFill("#BD34FE");
    setPathWidth(1);
  };

  const setPath = (newValue: any, cord: "x" | "y", index: number) => {
    console.log({ newValue, cord, index, path });

    const a = path.map((p: any, i: number) => {
      if (i === index) {
        return {
          ...p,
          [cord]: +newValue,
        };
      }
      return p;
    });
    console.log({ a });

    setPaths(a);
  };

  return (
    <storeContext.Provider
      value={{
        global: {
          viewBox,
          setViewBox,
          gridColor,
          setGridColor,
          gridStrokeWidth,
          setGridStrokeWidth,
          svgScale,
          setSvgScale,
          clear,
        },
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
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
