import { useState } from "react";

function ListGroup() {
  let items = ["Call of Duty", "Far Cry", "FIFA", "Halo", "GTA 5"];
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>This is my list</h1>
      {items.length === 0 && <p>Element Not Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
