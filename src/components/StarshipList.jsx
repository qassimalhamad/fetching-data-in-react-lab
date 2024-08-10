const StarshipList = (props) => {
  return (
    <ul>
      {props.starships.map((starship) => (
        <li>{starship.name}</li>
      ))}
    </ul>
  );
};

export default StarshipList;
