import { useEffect, useState } from "react";

function App() {
  const url = "https://api.mixcloud.com/discover/funk/popular/";
  const [popular, setPopular] = useState([])

  useEffect(() => {
    async function fetchUrl() {
      try {
        let response = await fetch(url);
        response = await response.json();
        console.log(response.data);
        setPopular(response.data)
      } catch (err) {
        alert(err);
      }
    }
    fetchUrl();
  }, []);

  return <div className="App">
    {
      popular.map((mix, mixIndex) => (
        <li key={mixIndex}>{mix.name}</li>
      ))
    }
  </div>;
}

export default App;