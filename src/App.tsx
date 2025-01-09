import ListGroup from "./components/ListGroup";
import Message from "./Message";
import Alert from "./components/Alert";
import Btn from "./components/Btn";
import { useState } from "react";
function App() {
  let items = ["Call of Duty", "Far Cry", "FIFA", "Halo", "GTA 5"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      <Message></Message>{" "}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Btn onClick={() => setAlertVisibility(true)} text="click"></Btn>
    </div>
  );
}

export default App;
