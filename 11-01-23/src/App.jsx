import BloodTypes from "./components/blood-types/BloodTypes";
import Users from "./components/Users/Users";
import Beers from "./components/beers/Beers";
import CreditCards from "./components/CreditCards/CreditCards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BloodTypes />
      <Users />
      <Beers />
      <CreditCards />
    </div>
  );
}

export default App;
