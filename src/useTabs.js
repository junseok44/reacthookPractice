import { useState } from "react";

export const useTabs = (initialValue, allTabs) => {
  const [value, setValue] = useState(initialValue);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentTab: allTabs[value],
    changeTab: setValue,
  };
};
