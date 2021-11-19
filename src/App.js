import { useEffect, useRef, useState } from "react";
import "./App.css";

const useScroll = () => {
  const title = useRef();
  const [y, changeY] = useState(window.scrollY);
  window.addEventListener("wheel", function () {
    changeY(window.scrollY);
  });
  console.log(y);
  //useEffect 부분 다시 공부하기

  useEffect(() => {
    if (title.current) {
      if (y >= 500) {
        title.current.style.height = "8vh";
        title.current.style.fontSize = "1rem";
      } else {
        title.current.style.height = "15vh";
        title.current.style.fontSize = "2rem";
      }
    } else {
      return;
    }
  });

  return title;
};

function App() {
  const title = useScroll();
  return (
    <div ref={title} className="header">
      Hello
    </div>
  );
}

export default App;
