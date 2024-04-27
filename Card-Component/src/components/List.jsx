import React from 'react'

const List = () => {
  const fruits = ['apple', 'orange', 'mango', 'pineapple']
  const listItems = fruits.map(fruit => <h2> {fruit} </h2>)
  return (
    <div>
      {listItems}
    </div>
  )
}

export default List
