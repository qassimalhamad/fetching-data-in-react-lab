import { useState } from "react";

const StarshipSearch = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default StarshipSearch;
