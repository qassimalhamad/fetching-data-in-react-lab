// src/App.jsx
import Show from "./services/starshipService";
import StarshipList from "./components/StarshipList";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Show();
      setStarships(data.results);
      console.log("Data", data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>StarWars</h1>
      <StarshipList starships={starships} />
    </>
  );
};

export default App;
