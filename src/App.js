import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        Dictionary
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <p className="App-footer">
        Coded by{" "}
        <a
          className="App-link"
          href="https://www.linkedin.com/in/oksana-stalbovskaya-19901126/"
          target="_blank"
          rel="noreferrer"
        >
          Oksana Stalbovskaya
        </a>{" "}
        and is open-sourced on{" "}
        <a
          className="App-link"
          href="https://github.com/magic-ksenia/Project-4-SheCodes-Dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </p>
    </div>
  );
}
