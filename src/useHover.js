import { useEffect, useRef } from "react";

export const useHover = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("onmouseover", callback);
    }
  });
  return ref;
};
