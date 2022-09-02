import throttle from "lodash/throttle";
import { useEffect, useState } from "react";

const useScreenTranslate = (pmramswidth: number) => {
  const [curwidth, setCurwidth] = useState<number>();

  // 第二步：通过生命周期 Hook 声明回调的绑定和解绑逻辑
  useEffect(() => {
    window.addEventListener("resize", throttle(updateSize, 200));
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const updateSize = ():void => {
    const currem = (pmramswidth * window.innerWidth) / 750 / 16;

    setCurwidth(currem);
  };

  return curwidth;
};

export default useScreenTranslate;
