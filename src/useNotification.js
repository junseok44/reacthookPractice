const useNotification = (msg, option, callback) => {
  const onClick = () => {
    if (Notification.permission === "granted") {
      new Notification(msg);
    } else {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          new Notification(msg);
        } else {
          return;
        }
      });
    }

    callback();
  };

  return onClick;
};

function App() {
  const hello = () => console.log("hello");
  const onClick = useNotification("welcome", {}, hello);
  return (
    <div>
      <h1>whell</h1>
      <button onClick={onClick}> don't click here</button>
    </div>
  );
}

export default App;
