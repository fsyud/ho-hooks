import throttle from "lodash/throttle";
import { useEffect, useState } from "react";

const useProportion = (height: number, width?: number) => {
  const [navheight, setNavheight] = useState<number>(
    (height / (width ? width : 1920)) * window.innerWidth
  );

  useEffect(() => {
    window.addEventListener("resize", throttle(handleWidthChange, 200));

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  const handleWidthChange = (): void => {
    const curheight = (height / (width ? width : 1920)) * window.innerWidth;
    setNavheight(curheight);
  };

  return navheight;
};

export default useProportion;
