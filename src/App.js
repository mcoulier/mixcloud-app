import { useEffect, useState } from "react";
import { SearchMix } from "./components/SearchMix";

function App() {
  const [popular, setPopular] = useState([]);
  const url = "https://api.mixcloud.com/discover/funk/popular/";

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
  }, []);

  return (
    <div className="App">
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
