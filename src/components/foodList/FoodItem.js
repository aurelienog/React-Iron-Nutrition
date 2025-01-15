import React from 'react'

export default function FoodItem({name, image}) {

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="" className='object-cover w-40'/>
    </div>
  )
}
