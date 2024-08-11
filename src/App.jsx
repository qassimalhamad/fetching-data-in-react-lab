// src/App.jsx
import Show from "./services/starshipService";
import StarshipList from "./components/StarshipList";
import { useState } from "react";
import { useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch";
import "./App.css";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchedStarship, setSearchedStarship] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Show();
      setStarships(data.results);
      setSearchedStarship(data.results);
    };
    fetchData();
  }, []);

  const handleSearch = (name) => {
    if (name.trim() === "") {
      setSearchedStarship(starships);
    } else {
      const filteredStarships = starships.filter((starship) =>
        starship.name.toLowerCase().includes(name.toLowerCase())
      );
      setSearchedStarship(filteredStarships);
    }
  };
  return (
    <>
      <h1>StarWars</h1>
      <StarshipSearch handleSearch={handleSearch} />
      <StarshipList starships={searchedStarship} />
    </>
  );
};

export default App;
