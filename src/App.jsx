import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {task: "Jog around the park 3x", completed: false, id: Math.ceil(Math.random() *1000)},
    {task: "10 minutes meditation", completed: false, id: Math.ceil(Math.random() *1000)},
    {task: "Read for 1 hour", completed: false, id: Math.ceil(Math.random() *1000)},
    {task: "Pick up groceries", completed: false, id: Math.ceil(Math.random() *1000)},
    {task: "Complete Todo App on Frontend Mentor", completed: false, id: Math.ceil(Math.random() *1000)},
  ]);
  const [element, setElement] = useState({ task: "", completed: false });
  const [dark, setDark] = useState(false);

  function handle(e) {
    e.preventDefault();
    setTodos([...todos, element]);
    setElement({task: "", completed: false});
  }

  function handleChange(e) {
    const yangi = {
      task: e.target.value,
      completed: false,
      id: Math.ceil(Math.random() * 1000),
    };
    setElement(yangi);
  }

  function handleCheck(e) {
    let yangiTodo = [...todos];
    let yangi = yangiTodo.find((item) => e === item.id);
    yangi.completed = !yangi.completed;
    setTodos(yangiTodo);
  }
  return (
    <div className={`raz ${dark ? "dark" : "light"}`}>
      <div className={`navbar`}>
        <h1>Todo</h1>
        <div>
          {!dark ? (
            <img
              src="/Combined Shape (1).svg"
              onClick={() => setDark(true)}
              alt=""
              style={{ color: "black" }}
            />
          ) : (
            <img
              onClick={() => setDark(false)}
              src="/Combined Shape (2).svg"
              alt=""
              style={{ color: "black" }}
            />
          )}
        </div>
      </div>
      <div>
        <form onSubmit={handle}>
          <input type="checkbox" />
          <input
            type="text"
            placeholder="Create a new todo…"
            value={element.task}
            onChange={handleChange}
          />
        </form>
        <div className="main">
          {todos.map((todo) => (
            <div key={todo.id} className="main_two">
              <input className="check" type="checkbox" onChange={() => handleCheck(todo.id)} />
              <span
                style={{
                  textDecoration: `${todo.completed ? "line-through" : "none"}`,
                }}
              >
                {todo.task}
              </span>
              <button></button>
            </div>
          ))}
          <div className="clear_top">
            <span>My todos: {todos.length}</span>
            <button className="clear" onClick={()=>setTodos([])}>Clear todo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
