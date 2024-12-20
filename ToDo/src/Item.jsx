function Item({id, name, removeItem}) {
  const handleChange = (event) => {
    if (event.target.checked) {
      removeItem(name);
    }
  }

  return (
    <div className="todo-item">
      <input type="checkbox" id={id} value={name} onChange={handleChange}/>
      <label htmlFor={id}> {name} </label>
    </div>
  );
};

export default Item;