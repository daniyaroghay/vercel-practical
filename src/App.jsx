import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Registration</h1>
      <p>Welcome to our student registration portal.</p>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;