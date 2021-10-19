import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

export const useAxios = (url, opt) => {
  const [currentState, setcurrentState] = useState({
    data: [],
    error: null,
    loading: true,
  });

  const clickChange = () => {
    axios
      .get(url)
      .then((data) => {
        setcurrentState({
          ...currentState,
          loading: false,
          data: data.data.data.movies,
        });
      })
      .catch((error) => {
        setcurrentState({
          ...currentState,
          error: error,
        });
      });
  };
  const [reFetchNumber, setreFetchNumber] = useState(0);
  const reFetch = () => {
    setreFetchNumber(Math.random());
  };
  useEffect(() => {
    setcurrentState({
      ...currentState,
      loading: true,
      error: null,
    });
    clickChange();
  }, [reFetchNumber]);
  return { currentState, clickChange, reFetch };
};

function App() {
  const { currentState, clickChange, reFetch } = useAxios(
    "https://yts.mx/api/v2/list_movies.json"
  );
  return (
    <div>
      <h1>the title of the movies</h1>
      <h3>
        {currentState.loading
          ? currentState.error
            ? currentState.error.message
            : "Loading..."
          : currentState.data.map((movie) => {
              return <li key={movie.id}>{movie.title}</li>;
            })}
      </h3>
      <button onClick={clickChange}>get data</button>
      <button onClick={reFetch}>get again</button>
    </div>
  );
}

export default App;
