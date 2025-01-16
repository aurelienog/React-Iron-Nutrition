import { React, useEffect, useState } from 'react'
import FoodItem from './FoodItem';

export default function FoodList(foodsDb) {
  const [foods, setFood] = useState([]);

  useEffect(() => {
    setFood(foodsDb.foods)
  }, [foodsDb])

  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-3xl text-center p-8'>Food List</h1>
      <div className='grid grid-cols-3'>
        {foods.map((food) => (
        <FoodItem key={food.name} {...food} />
      ))}
      </div>

    </div>
  )
}
