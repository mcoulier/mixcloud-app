import { useEffect, useState } from "react";

export const SearchMix = () => {
  const [searchValue, setSearchValue] = useState("");
  const [genre, setGenre] = useState("Electronica");
  const [searchType, setSearchType] = useState("cloudcast");
  const [searchData, setSearchData] = useState([]);
  const searchUrl = `https://api.mixcloud.com/search/?q=${searchValue}&type=cloudcast`;
  const cityUrl = `https://api.mixcloud.com/discover/${genre}+city:${searchValue}/popular/?limit=20&offset=20`;

  useEffect(() => {
    async function fetchUrl() {
      try {
        let response = await fetch(cityUrl);
        response = await response.json();
        setSearchData(response.data);
        console.log(cityUrl);
        console.log(response);
      } catch (err) {
        alert(err);
      }
    }
    fetchUrl();
  }, [cityUrl]);

  return (
    <div>
      <form>
        <label>
          Search:
          <input
            type="text"
            value={searchValue}
            onChange={(e) =>
              setSearchValue(e.target.value.replaceAll(" ", "-"))
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {searchData &&
        searchData.map((query, queryIndex) => (
          <li key={queryIndex}>
            <p>{query.name}</p>
            <br />
            {query.url}
          </li>
        ))}
    </div>
  );
};
