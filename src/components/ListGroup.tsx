import { MouseEvent } from "react";

function ListGroup() {
  let cities = ["New York", "Tokyo", "Chennai", "Paris", "Bangalore"];

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Test Fragment</h1>
      {cities.length === 0 && <p>No city added.</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city} onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
