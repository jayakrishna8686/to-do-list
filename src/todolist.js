import React from "react";

const Todolist = ({ todolist, buttonHandler }) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <h5>
          {todo} &nbsp;
          <button onClick={() => buttonHandler(index)}>Delete</button>
        </h5>
      ))}
    </div>
  );
};

export default Todolist;
