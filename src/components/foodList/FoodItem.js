import React from 'react'

function FoodBox({food, onDeleteFood}) {


  return (
    <div>
      <img src={food.image} alt="" className='object-cover  h-32'/>
      <p className='leading-10'>Calories: {food.calories}
        <br></br> 
        Servings: <span className='font-bold'>{food.servings}</span>
        <br></br> 
        <span className='font-bold'>Total calories: {food.calories}</span> kcal
      </p>
      <button onClick={() => (onDeleteFood(food))} className='px-6 py-2 rounded-md bg-blue-600 text-white'>Delete</button>
    </div>


  )
}

export default function FoodItem(props) {

  return (
    <div className='border m-4'>
      <p className='border-b p-4 font-bold'>{props.name}</p>
      <div className='p-4'>
        <FoodBox {...props}/>
        

      </div>
      
    </div>
  )
}
