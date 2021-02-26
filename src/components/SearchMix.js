import { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";

export const SearchMix = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("funk");
  const [searchType, setSearchType] = useState("cloudcast");
  const [searchData, setSearchData] = useState([]);
  const searchUrl = `https://api.mixcloud.com/search/?q=${query}&type=cloudcast`;

  useEffect(() => {
    async function fetchUrl() {
      try {
        let response = await fetch(`https://api.mixcloud.com/discover/${genre}+city:${search}/popular/?limit=20&offset=20`);
        response = await response.json();
        setSearchData(response.data);
        console.log(response);
      } catch (err) {
        alert(err);
      }
    }
    fetchUrl();
  }, [search]);

  return (
    <div>
      <form>
        <label>
          Search City:
          <TextField
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <Button className='submitButton' variant="contained" color="primary" onClick={() => setSearch(query)}>Submit</Button>
      </form>
      <div className="popList">
        {searchData &&
          searchData.map((query, queryIndex) => (
            <p className="popListItem" key={queryIndex} onClick={() => console.log('lel')}>
              <img src={query.pictures.large} alt={query.name} />
              <h3>{query.name}</h3>
              <br />
              {query.url}
              {query.tags.map((tag, tagIndex) => (
                  <p className="tags" key={tagIndex}>
                    {query.tags[tagIndex].name}
                  </p>
                ))}
            </p>
          ))}
      </div>
    </div>
  );
};
