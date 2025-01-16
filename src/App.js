import foodsDb from "./foods.json";
import './App.css';
import FoodList from "./components/foodList/FoodList";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";
import { useState } from "react";
import Search from "./components/search/Search";

const  allFoods = foodsDb;

function App() {
  const [foods, setFoods] = useState(foodsDb)

  console.log(foods)

  const addFilter = (search) => {

  }


  const addFood = (food) => {
    setFoods((prev) => [food, ...foods])
  }


  return (
    <div className="App">

      <AddFoodForm addFood={addFood}/>

      <Search addFilter={addFilter}/>
      <FoodList foods = {foods}/>
    </div>
  );
}

export default App;
