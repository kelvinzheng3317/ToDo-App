import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Item.jsx'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])

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
    </div>
  )
}

export default App
