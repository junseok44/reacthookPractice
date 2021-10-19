import { useEffect, useRef } from "react";

const useHover = (handler) => {
  const h1Element = useRef();

  useEffect(() => {
    const { current } = h1Element;
    if (current) {
      current.addEventListener("mouseover", handler);
    }
    return () => current.removeEventListener("mouseover", handler);
  });

  return h1Element;
};

function App() {
  const hello = () => console.log("hello");

  const h1Element = useHover(hello);
  return (
    <div>
      <h1 ref={h1Element}>hello</h1>
    </div>
  );
}

export default App;
