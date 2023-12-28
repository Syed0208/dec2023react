function ListGroup() {
  let cities = ["New York", "Tokyo", "Chennai", "Paris", "Bangalore"];
  cities = [];

  return (
    <>
      <h1>Test Fragment</h1>
      {cities.length === 0 && <p>No city added.</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
