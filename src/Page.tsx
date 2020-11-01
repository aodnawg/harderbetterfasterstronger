import React, { useRef } from "react";
import classNames from "classnames";

import Canvas from "./components/Canvas/Canvas";
import { CONTAINER_ID } from "./const";

const Word: React.FC = ({ children }) => {
  return (
    <div
      className={classNames("flex", "items-center", "text-center", "h-screen")}
    >
      <p className={classNames("w-full", "text-xl")}>{children}</p>
    </div>
  );
};

const Bg: React.FC = () => {
  return (
    <div className={classNames("fixed", "top-0", "left-0", "z-0", "bg-white")}>
      <div
        className={classNames(
          "w-screen",
          "h-screen",
          "flex",
          "items-center",
          "justify-center"
        )}
      >
        <Canvas />
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      id={CONTAINER_ID}
      className={classNames("relative")}
      ref={containerRef}
    >
      <Bg />
      <div className={classNames("z-10", "relative", "text-gray-100")}>
        <Word>harder</Word>
        <Word>better</Word>
        <Word>faster</Word>
        <Word>stronger</Word>
      </div>
    </div>
  );
};

export default Page;
