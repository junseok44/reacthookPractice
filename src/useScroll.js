import { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const [yPosition, setYPosition] = useState(window.scrollY);
  const element = useRef();

  const handler = (event) => {
    console.log("지금 y좌표입니다", window.scrollY);
    setYPosition(window.scrollY);
    if (yPosition >= 10) {
      const { current } = element;
      if (current) {
        current.style.backgroundColor = "red";
      }
    } else {
      const { current } = element;
      if (current) {
        current.style.backgroundColor = "gray";
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handler);
  });

  return { element };
};

function App() {
  const { element } = useScroll();
  return (
    <div style={{ height: 1000 }}>
      <h1 ref={element} style={{ position: "fixed" }}>
        hello
      </h1>
    </div>
  );
}

export default App;
