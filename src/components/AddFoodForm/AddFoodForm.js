import React, { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button, Empty } from "antd";

const empty = {
  name: "",
  image: "",
  calories: "",
  servings: ""
}

export default function AddFoodForm({addFood}) {
  const [food, setFood] = useState(empty)

  const handleChange = (ev) => {
    const key = ev.target.id; 
    const value = ev.target.value;

    setFood({
      ...food,
      [key]: value,
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addFood(food);
    setFood(empty);
  }

  return (
    <form className='w-[80%] mx-auto' onSubmit={handleSubmit}>
      <div className=' flex flex-col'>
        <label htmlFor="name">Name</label>
        <Input value={food.name} type="text" name="name" id="name" onChange={handleChange} className='border rounded-sm'/>
      </div>

      <div className=' flex flex-col'>
        <label htmlFor="image">image</label>
        <Input value={food.image} type="text" onChange={handleChange} id="image"  name="image" className='border rounded-sm'/>
      </div>

      <div className=' flex flex-col'>
        <label htmlFor="calories">calories</label>
        <Input value={food.calories} type="number" onChange={handleChange} id="calories" name="calories" className='border rounded-sm'/>
      </div>

      <div className=' flex flex-col'>
        <label htmlFor="servings">servings</label>
        <Input value={food.servings} type="number" onChange={handleChange} id="servings" name="servings" className='border rounded-sm' />
      </div>

      <button type='submit' className='bg-gray-300 px-6 py-2 rounded-sm my-4'>Create</button>

    </form>
    )  
}
