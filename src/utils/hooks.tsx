import { useCallback, useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

export function useWindowSize(delay: number = 100) {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedSetSize = useCallback(
    debounce((width: number, height: number) => {
      setSize([width, height]);
    }, delay),
    [delay]
  );
  useLayoutEffect(() => {
    const updateSize = () =>
      delayedSetSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [delayedSetSize]);
  return size;
}
