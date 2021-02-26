import { useEffect, useState } from "react";
import { GenreButton } from "./components/GenreButton";
import { SearchMix } from "./components/SearchMix";
import "./App.css";

function App() {
  const [popular, setPopular] = useState([]);
  const [genre, setGenre] = useState("funk");
  const url = `https://api.mixcloud.com/discover/${genre}/popular/`;

  useEffect(() => {
    async function fetchUrl() {
      try {
        let response = await fetch(url);
        response = await response.json();
        console.log(response.data);
        setPopular(response.data);
      } catch (err) {
        alert(err);
      }
    }
    fetchUrl();
  }, [url]);

  return (
    <div className="App">
      <GenreButton setGenreName={setGenre}/>
      <SearchMix />
      {popular.map((mix, mixIndex) => (
        <li key={mixIndex}>
          <h3>{mix.name}</h3>
          <br />
          {mix.url}
        </li>
      ))}
    </div>
  );
}

export default App;
