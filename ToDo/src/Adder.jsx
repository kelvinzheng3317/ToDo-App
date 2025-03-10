import { useState } from "react"

export default function Adder({addItem}) {
  const [newItem, setNewItem] = useState("");

  const updateItem = (e) => {
    setNewItem(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitItem();
    }
  }

  const submitItem = () => {
    addItem(newItem);
    setNewItem("");
  }

  return (
    <div className="adder">
      <button className="adder-button" onClick={submitItem}>+</button>
      <input 
        type="text" 
        placeholder="Item Name" 
        onChange={updateItem} 
        onKeyDown={handleKeyDown} 
        value={newItem} 
      />
    </div>
  )
}