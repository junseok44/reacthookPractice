/*

const useConfirm = (message = "", callback) => {
  if (!callback || typeof callback !== "function") {
    return;
  }
  const deleteFunction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };
  return deleteFunction;
};



function App() {
  const deleteTheWorld = () => console.log("deleting the world...");
  const deleteFunction = useConfirm("hello", deleteTheWorld);
  return (
    <div className="container">
      <h1>hello</h1>
      <button onClick={deleteFunction}>click here</button>
    </div>
  );
}

*/
