import { useState, useEffect } from "react";

export const useTitle = (initialValue) => {
  const [title, setTitle] = useState(initialValue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle);
  return setTitle;
};
