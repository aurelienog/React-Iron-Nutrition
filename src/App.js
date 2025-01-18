import foodsDb from "./foods.json";
import './App.css';
import FoodList from "./components/foodList/FoodList";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";
import { useEffect, useState } from "react";
import Search from "./components/search/Search";

function App() {
  const [foods, setFoods] = useState([]);
  const [allFoods, setAllFoods] = useState([]);
  const [form, setForm] = useState(false);

  useEffect(() => {
    setFoods(foodsDb);
    setAllFoods(foodsDb);
  }, [])

  const addFilter = (search) => {
    const filteredFoods = allFoods.filter((food) => food.name.toLowerCase().includes(search.toLowerCase())
  );
    setFoods(filteredFoods);
  }

  const addFood = (food) => {
    setFoods((prev) => [food, ...foods]);
    setAllFoods((prev) => [food, ...allFoods]);
  }

  const onDeleteFood = (food) => {
    setFoods((prev) => prev.filter(f => f != food))
    setAllFoods((prev) => prev.filter(f => f != food))
  }

  return (
    <div className="App">
      {form ? <AddFoodForm addFood={addFood}/> : null }
      <button onClick={() => setForm(!form)} className="border border-blue-400 text-blue-400 rounded-sm p-2 ml-[10%] mt-4"> 
      {form ? "hide form" : "Add New Food"} </button>
      <Search addFilter={addFilter}/>
      <FoodList foods = {foods} onDeleteFood={onDeleteFood}/>
    </div>
  );
}

export default App;
