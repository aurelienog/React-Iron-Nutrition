import foodsDb from "./foods.json";
import './App.css';
import FoodList from "./components/foodList/FoodList";

function App() {
  return (
    <div className="App">
      <FoodList foodsDb = {foodsDb}/>
    </div>
  );
}

export default App;
