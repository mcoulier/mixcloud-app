import "./App.css";
import { PopGenreSearch } from "./components/PopGenreSearch";
import { SearchMix } from "./components/SearchMix";

function App() {
  return (
    <div className="App">
      <h1>Your Local Funk</h1>
      <SearchMix/>
      <PopGenreSearch />
    </div>
  );
}

export default App;
