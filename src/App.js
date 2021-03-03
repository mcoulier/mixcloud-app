import "./App.css";
import Footer from "./components/Footer";
import { PopGenreSearch } from "./components/PopGenreSearch";
import { SearchMix } from "./components/SearchMix";

function App() {
  return (
    <div className="App">
      <PopGenreSearch />
      <Footer />
      <SearchMix />
    </div>
  );
}

export default App;
