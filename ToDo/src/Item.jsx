import { useState } from "react"

function Item({name, removeItem}) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    // if (event.target.checked) {
    setChecked(true);
    removeItem(name);
  }

  // FIXME: id is currently name, once item is a dict set it to the id attribute
  return (
    <div className="todo-item">
      <input type="checkbox" id={name} value={name} checked={checked} onChange={handleChange}/>
      <label htmlFor={name}> {name} </label>
    </div>
  );
};

export default Item;