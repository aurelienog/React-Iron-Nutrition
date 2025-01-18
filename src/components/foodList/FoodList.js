import { React } from 'react'
import FoodItem from './FoodItem';

export default function FoodList({foods, onDeleteFood}) {

  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-3xl text-center p-8'>Food List</h1>
      <div className='grid grid-cols-3'>
        { foods.length > 0 ?
        foods.map((food, i) => (
        <FoodItem key={i} food={food} onDeleteFood={onDeleteFood} />
      )) : "oops! there is no more food to show"
        }

      </div>

    </div>
  )
}
