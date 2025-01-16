import React, { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function Search({addFilter}) {
  const [search, setSearch] = useState("");

  const handlechange = (ev) => {
    setSearch(ev.target.value);
    addFilter(ev.target.value);
  }

  return (
    <div className='w-[80%] mx-auto mt-8'>
      <label htmlFor="search">Search</label>
      <Input value={search} onChange={handlechange} name="search"/>
    </div>
  )
}
