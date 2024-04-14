import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button  name="Live "/>
        <Button  name="Cooking"/>
        <Button  name="Soccer"/>
        <Button  name="Cricket"/>
      
        </div>
  )
}

export default ButtonList