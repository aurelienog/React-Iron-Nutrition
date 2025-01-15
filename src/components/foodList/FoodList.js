import { React, useEffect, useState } from 'react'
import FoodItem from './FoodItem';

export default function FoodList({foodsDb}) {
  const [foods, setFood] = useState([]);

  useEffect(() => {
    console.log(foodsDb)
    setFood(foodsDb)
  }, [])

  return (
    <div >
      <h1 className='text-3xl text-center p-8'>Food List</h1>
      
      <div>
        {foods.map((food) => (
          <FoodItem key={food.name} {...food} />
        ))}
      </div>

    </div>
  )
}
