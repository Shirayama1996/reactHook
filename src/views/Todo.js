const Todo = (props) => {
  const handleDeleteTodo = (item) => {
    let newList = props.todo.filter((obj) => obj.id !== item.id);
    props.deleteTodo(newList);
  };
  return (
    <div className="todo-container">
      <h3>{props.title}</h3>
      {props.todo &&
        props.todo.length > 0 &&
        props.todo.map((item, index) => {
          return (
            <div key={item.id} className="todo-child">
              {index + 1} - {item.title}{" "}
              <button onClick={() => handleDeleteTodo(item)}>X</button>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
