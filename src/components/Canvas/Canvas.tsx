import React from "react";
import { useCanvas } from "./useCanvas";

export const Canvas: React.FC<{}> = () => {
  const ref = useCanvas();
  const style: React.CSSProperties = {
    width: "60vw",
    height: "60vw",
  };
  return <div ref={ref} style={style} />;
};

export default Canvas;
