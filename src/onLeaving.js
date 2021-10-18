/*

const onLeaving = (handler) => {
  if (typeof handler !== "function") {
    return;
  }
  const preventLeaving = () => {
    window.addEventListener("beforeunload", handler);
  };
  const unpreventLeaving = () => {
    window.removeEventListener("beforeunload", handler);
  };

  return { preventLeaving, unpreventLeaving };
};

function App() {
  const handleAlarm = (e) => {
    e.preventDefault();
    e.returnValue = "";
    console.log("are you sure to leave?");
  };
  const { preventLeaving, unpreventLeaving } = onLeaving(handleAlarm);
  return (
    <div className="container">
      <h1>hello</h1>
      <button onClick={preventLeaving}>prevent Leaving</button>
      <button onClick={unpreventLeaving}>liberate Leaving</button>
    </div>
  );
}

*/
