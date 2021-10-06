import { useRef, useState, useLayoutEffect } from "react";
import { divContext } from "./divContext";
import { useWindowSize } from "../hooks/useWindowSize";

export const DivState = ({ children }) => {
  const size = useWindowSize();
  const [divHeight, setDivHeight] = useState(500);
  const targetRef = useRef();

  useLayoutEffect(() => {
    if (targetRef.current && size.height) {
      const { clientHeight, offsetHeight } = targetRef.current;
      const difference = offsetHeight - size.height;

      setDivHeight(difference ? clientHeight - difference : size.height);
    }
  }, [size.height]);

  return (
    <divContext.Provider value={{ divHeight, setDivHeight, size }}>
      {children}
    </divContext.Provider>
  );
};
