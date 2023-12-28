function ListGroup() {
  let cities = ["New York", "Tokyo", "Chennai", "Paris", "Bangalore"];
  let selectedIndex = 0;

  //Event Handler

  return (
    <>
      <h1>Test Fragment</h1>
      {cities.length === 0 && <p>No city added.</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
