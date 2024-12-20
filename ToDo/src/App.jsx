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

  const removeItem = (item) => {
    console.log("removing " + item); // for debugging
    let array = items;
    let index = array.indexOf(item);
    if (index != -1) {
      array.splice(index, 1);
    }
    setItems(array);
  }

  return (
    <div>
      <p>Testing</p>
      <Item id={1} name={"Buy Groceries"} removeItem={removeItem}/>
      <Item id={2} name={"Take Out Trash"} removeItem={removeItem}/>
      <Adder addItem={addItem} />
    </div>
  )
}

export default App
