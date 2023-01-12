import { useEffect, useState } from "react";
import BloodTypes from "./components/blood-types/BloodTypes";
import Users from "./components/Users/Users";
import Beers from "./components/beers/Beers";
import CreditCards from "./components/CreditCards/CreditCards";
import SelectRouter from "./components/SelectRouter/SelectRouter";
import DefaultComponent from "./components/SelectRouter/DefaultComponent";
import Counter from "./components/Counter/Counter";
import "./App.css";

const componentMap = {
  users: Users,
  bloodTypes: BloodTypes,
  card: CreditCards,
  default: DefaultComponent,
  counter: Counter,
};

function App() {
  const [componentToRender, setComponentToRender] = useState("default");

  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };
  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">
      <SelectRouter selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />
    </div>
  );
}

export default App;
