const useNotification = (callback) => {
  if (!(Notification in window)) {
    console.log("no notification");
    return;
  }
  const onClick = () => {
    Notification.requestPermission().then((result) => {
      console.log(result);
    });

    callback();
  };

  return onClick;
};

function App() {
  const hello = () => console.log("hello");
  const onClick = useNotification(hello);
  return (
    <div>
      <h1>whell</h1>
      <button onClick={onClick}> don't click here</button>
    </div>
  );
}

export default App;
