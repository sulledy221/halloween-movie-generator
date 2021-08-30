import "./App.css";
import Halloween from "./components/Halloween";
import * as movies from "./components/movies";

function App() {
  return (
    <div className="App">
      <h1>This is Halloween</h1>
      <Halloween
        halloweenItems={movies.Halloween70}
        type="Spookies from the 70's"
        className="movie-text"
      />
      <Halloween
        halloweenItems={movies.Halloween80}
        type="Spookies from the 80's"
        className="movie-text"
      />
      <Halloween
        halloweenItems={movies.Halloween90}
        type="Spookies from the 90's"
        className="movie-text"
      />
      <Halloween
        halloweenItems={movies.HalloweenFamily}
        type="Family Spookies"
        className="movie-text"
      />
    </div>
  );
}

export default App;
