import React, { useState } from "react";
import Todolist from "./todolist";

const App = () => {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState([]);

  const OnChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask("");
  };

  const buttonHandler = (indexValue) => {
    const newTodos = todo.filter((todo, index) => index !== indexValue);
    setTodo(newTodos);
  };

  return (
    <div>
      <center>
        <h1>To Do List App</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="task"
            onChange={OnChangeHandler}
            placeholder="Type your task here"
            value={task}
          />
          &nbsp;
          <input type="submit" value="Add" />
        </form>
        <Todolist todolist={todo} buttonHandler={buttonHandler} />
      </center>
    </div>
  );
};

export default App;
