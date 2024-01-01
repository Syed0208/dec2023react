import { useState } from "react";
import Button from "./components/Button";
import MyAlert from "./components/MyAlert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <MyAlert onClose={() => setAlertVisibility(false)}>My Alert!</MyAlert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
