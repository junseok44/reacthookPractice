import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "black",
    background: "white",
  },
  dark: {
    foreground: "white",
    background: "black",
  },
};

const myThemeContext = React.createContext(themes.light);

function App() {
  return (
    <myThemeContext.Provider value={themes.dark}>
      <Toolbar></Toolbar>
    </myThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ButtonBar></ButtonBar>
      <myThemeContext.Consumer>
        {(theme) => (
          <button
            style={{
              color: theme.foreground,
              backgroundColor: theme.background,
              margin: "10px",
            }}
          >
            another practice using practice
          </button>
        )}
      </myThemeContext.Consumer>
    </div>
  );
}

function ButtonBar() {
  const theme = useContext(myThemeContext);
  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      hello!
    </button>
  );
}

export default App;
