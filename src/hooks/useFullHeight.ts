import { useCallback, useEffect, useState } from "react";
import getWindowHeight from "../lib/getWindowHeight";

const useFullHeight = () => {
  const [height, setHeight] = useState("100vh");
  const setVh = useCallback(() => {
    setHeight(getWindowHeight() + "px");
  }, []);
  useEffect(() => {
    setVh();
    window.addEventListener("resize", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);
  return height;
};

export default useFullHeight;
