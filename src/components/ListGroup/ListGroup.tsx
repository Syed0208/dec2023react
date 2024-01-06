import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0px;
`;

interface ListItemProps {
  isActive: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0px;
  background: ${(props) => (props.isActive ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No city added.</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            style={{ backgroundColor: "yellow" }}
            isActive={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
