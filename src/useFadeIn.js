import { useEffect, useRef } from "react";

export const useFadeIn = (duration, delay) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
    if (element.current) {
      const { current } = element;
      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  });

  return { ref: element, style: { opacity: 0 } };
};
