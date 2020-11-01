import React, { useRef, useEffect } from "react";
import classNames from "classnames";

const Word: React.FC = ({ children }) => {
  const wordRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (wordRef.current === null) {
      return;
    }
    const option: IntersectionObserverInit = { rootMargin: "-10%" };
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          (entry.target as HTMLDivElement).style.animation =
            "sqew 1.5s forwards ease-in";
        } else {
          (entry.target as HTMLDivElement).style.animation = "none";
        }
      });
    };
    const observer = new IntersectionObserver(callback, option);

    observer.observe(wordRef.current);
  });

  const style: React.CSSProperties = {
    fontFamily: "Roboto Mono",
    fontWeight: 700,
    fontSize: "2.8rem",
  };

  return (
    <div
      className={classNames("flex", "items-center", "text-center", "h-screen")}
    >
      <div
        ref={wordRef}
        style={style}
        className={classNames("w-full", "text-gray-900", "opacity-75")}
      >
        <p>{children}</p>
        <p>{children}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Word;
