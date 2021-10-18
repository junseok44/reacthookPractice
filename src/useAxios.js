import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const reFetch = () => {
    setState({
      ...state,
      loading: true,
      data: null,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((result) => {
        setState({
          ...state,
          loading: false,
          data: result,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error: error,
        });
      });
  }, [trigger]);

  if (!opts.url) {
    return;
  }

  return { state, reFetch };
};

export default useAxios;
