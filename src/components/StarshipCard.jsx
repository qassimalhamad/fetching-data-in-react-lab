const StarshipCard = ({ starshipDetails }) => {
  return (
    <li>
      <h2>{starshipDetails.name}</h2>
      <p>Class: {starshipDetails.starship_class}</p>
      <p>Manufacturer: {starshipDetails.manufacturer}</p>
      <p>Model: {starshipDetails.model}</p>
    </li>
  );
};

export default StarshipCard;
