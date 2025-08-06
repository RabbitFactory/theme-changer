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
        <h1>Scalable Theme Toggle</h1>
        <p>This is a demonstration of how theme switching works in a React app.</p>
        <p>The background, text color, and other UI elements will adapt to the selected theme.</p>

        <section className="card-grid">
          <div className="card">💡 Tip 1: Use Context</div>
          <div className="card">⚙️ Tip 2: Use CSS Variables</div>
          <div className="card">🎨 Tip 3: Style Responsively</div>
        </section>
      </main>
    </div>
  );
}

export default App;
