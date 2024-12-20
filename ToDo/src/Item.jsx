function Item({id, name}) {
  return (
    <div className="todo-item">
      <input type="checkbox" id={id} value={name} />
      <label for={id}> {name} </label>
    </div>
  );
};

export default Item;