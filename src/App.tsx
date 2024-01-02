import { useState } from "react";
import Button from "./components/Button";
import MyAlert from "./components/MyAlert";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["1", "2", "3"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Test"
        onSelectItem={(item) => console.log("Item active")}
      ></ListGroup>
    </div>
    // <div>
    //   {alertVisible && (
    //     <MyAlert onClose={() => setAlertVisibility(false)}>My Alert!</MyAlert>
    //   )}
    //   <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    // </div>
  );
}

export default App;
