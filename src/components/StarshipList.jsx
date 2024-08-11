import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <>
      <h1>StarShips</h1>
      <p>Number of results : {props.starships.length}</p>
      {props.starships.map((starship) => (
        <ul>
          <StarshipCard starshipDetails={starship} />
        </ul>
      ))}
    </>
  );
};

export default StarshipList;
