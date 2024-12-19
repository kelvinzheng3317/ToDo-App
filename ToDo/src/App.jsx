import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Item.jsx'

function App() {

  return (
    <div>
      <p>Testing</p>
      <Item id={1} name={"Buy Groceries"} />
      <Item id={2} name={"Take Out Trash"} />
    </div>
  )
}

export default App
