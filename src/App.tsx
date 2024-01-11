import { useState } from "react";
import Button from "./components/Button/Button";
import MyAlert from "./components/MyAlert";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["1", "2", "3"];

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Test"
    //     onSelectItem={(item) => console.log("Item active")}
    //   ></ListGroup>
    // </div>
    // <div>
    //   {/* {alertVisible && (
    //     <MyAlert onClose={() => setAlertVisibility(false)}>My Alert!</MyAlert>
    //   )} */}
    //   <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    // </div>
    <div>
      {/* <Like onClick={() => console.log("Clicked!!")} /> */}
      <ExpandableText maxChars={10}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        expedita, fugit praesentium assumenda pariatur aliquid nisi beatae sunt
        hic sed, dignissimos quidem fuga consequatur tempora libero provident
        eaque obcaecati dolores quia, ratione numquam fugiat molestias
        quibusdam? Aliquid a at odio architecto impedit ipsam magni voluptatum
        illum animi adipisci sequi ad sunt ab consectetur quos corporis est
        voluptatibus odit, quidem ducimus vero. Ipsa neque debitis nisi,
        asperiores architecto ut quas aliquam eum minus vitae doloribus hic
        dolor ullam provident! Suscipit ab quidem veniam provident cupiditate
        reprehenderit eos excepturi eveniet deserunt doloribus deleniti tenetur
        corporis facere, sapiente optio minima reiciendis aliquam molestias?
      </ExpandableText>
    </div>
  );
}

export default App;
