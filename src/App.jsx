import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
      <h1>Hello, Theme World!</h1>
    </div>
  );
}

export default App;
