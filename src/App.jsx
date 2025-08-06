import "./App.css";
import useTheme from "./Hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </header>

      <main className="content">
        <h1>✨ Theme Playground</h1>
        <p className="description">
          Toggle between elegant dark mode and bright vibes. Feel the mood shift.
        </p>

        <section className="card-grid">
          <div className="card">
            <span>🌈</span>
            Vibrant Color Modes
          </div>
          <div className="card">
            <span>🛠️</span>
            Developer-Friendly Setup
          </div>
          <div className="card">
            <span>🎨</span>
            Styled with Love
          </div>
          <div className="card">
            <span>⚡</span>
            Fast Refresh Ready
          </div>
          <div className="card">
            <span>📦</span>
            Clean Architecture
          </div>
          <div className="card">
            <span>🌙</span>
            Dark Mode Done Right
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
