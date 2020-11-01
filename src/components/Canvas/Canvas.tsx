import React from "react";
import { useCanvas } from "./useCanvas";

export const Canvas: React.FC<{}> = () => {
  const ref = useCanvas();
  const style: React.CSSProperties = {
    width: "70vw",
    height: "70vw",
  };
  return <div ref={ref} style={style} />;
};

export default Canvas;
