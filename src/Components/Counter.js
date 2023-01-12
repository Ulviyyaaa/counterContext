import React, { useContext } from 'react'
import  {MainContext } from '../Context/MainContext'

function Counter() {
    const [count , setCount ] = useContext(MainContext)
  return (
    <h1>Count : {count}</h1>
  )
}

export default Counter