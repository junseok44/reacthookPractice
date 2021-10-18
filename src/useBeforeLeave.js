/*
import { useEffect } from "react";

const useBeforeLeave = (callback) => {
  const handler = (event) => {
    if (event.clientY <= 100) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handler);
  });
};

function App() {
  const pleaseDontGo = () => console.log("are you sure you want to leave?");
  useBeforeLeave(pleaseDontGo);
  return (
    <div className="container">
      <h1>hello</h1>
    </div>
  );
}
*/
