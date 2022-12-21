import "./App.css";
import { Button } from "./Components/Button/Button";
import { Text } from "./Components/Text/Text";

function App() {
  return (
    <div className="App">
      <Text content="Mostra console" as="h2" />
      <Text content="Clicka i bottoni" />
      <div className="btns">
        <Button
          onClick={() =>
            console.log("HTML non è un linguaggio di programmazione")
          }
          variant="primary"
          className=""
        />
        <Button
          onClick={() =>
            console.log(
              "JS è il miglior ed il peggior linguaggio per iniziare a programmare"
            )
          }
          variant="primary"
          className=""
        />
        <Button
          onClick={() => console.log("CSS is awesome")}
          variant="primary"
          className=""
        />
      </div>
    </div>
  );
}

export default App;
