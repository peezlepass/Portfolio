import React from "react";
import Task from "./Task";

export default function List({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.length ? (
        tasks.map((task) => {
          return (
            <li key={task.id}>
              <Task setTasks={setTasks} task={task} />
            </li>
          );
        })
      ) : (
        <p>Add a Task</p>
      )}
    </ul>
  );
}
