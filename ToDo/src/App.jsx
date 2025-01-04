import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Item.jsx'
import Adder from './Adder.jsx'

function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  // grabs items array from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, [])

  // updates localStorage when items array gets updated
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    setItems([...items, item]);
  }

  /* 
  Learning point: For reference type variables like arrays and objects, 
  React compares memory addresses when comparing old and new state. Thus,
  if you modify these variable types in-place (like using pop, push, splice on an array),
  it will not trigger React to rerender the component as they see the state as having not changed.
  In order to trigger a rerender for an array state, you need to create a new copy of the array thats modified
  and set state to this new array. Note that Javascript copies arrays and objects by reference.
  This wont work: let newArray = array;
  This will work: let newArray = [...array];
  */
  const removeItem = (item) => {
    console.log("removing " + item); // for debugging
    const newArray = items.filter(currItem => currItem != item);
    setItems(newArray);
  }
  
  let itemElems = items.map(item => <Item name={item} removeItem={removeItem} />);

  return (
    <div>
      <p>Testing</p>
      <div className='itemList'>
        {itemElems}
      </div>
      {/* <Item id={1} name={"Buy Groceries"} removeItem={removeItem}/>
      <Item id={2} name={"Take Out Trash"} removeItem={removeItem}/> */}
      <Adder addItem={addItem} />
    </div>
  )
}

export default App
