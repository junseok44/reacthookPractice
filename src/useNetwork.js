import { useEffect, useState } from "react";

function App() {
  const useNetwork = (callback) => {
    const [network, setNetwork] = useState(navigator.onLine);
    const handler = () => {
      const { onLine } = navigator;
      setNetwork(onLine);
      callback(onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handler);
      window.addEventListener("offline", handler);
      return () => {
        window.removeEventListener("online", handler);
        window.removeEventListener("offline", handler);
      };
    });
    return network;
  };

  const useCallback = (isOnline) =>
    console.log(isOnline ? "you are in online" : "you are offline");
  //밖에서 callback 함수를 정의해줄때는 network라는 것이 필요한데, 그것을 useNetwork에서 꺼내줘야 하니까 return을 쓴다.
  // 아니면 그냥 useCallback의 argument를 정의해놓고. 그냥 쓰는방법도 있다.
  const network123 = useNetwork(useCallback);

  return (
    <div>
      <h1>is this working?</h1>
      <h3>{network123 ? "you are in online" : "you are offline"}</h3>
    </div>
  );
}

export default App;
