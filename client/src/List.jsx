import React from "react";
import Task from "./Task";

export default function List({ tasks }) {
  return (
    <ul>
      {tasks.length ? (
        tasks.map((task) => {
          return (
            <li key={task.id}>
              <Task task={task} />
            </li>
          );
        })
      ) : (
        <p>Add a Task</p>
      )}
    </ul>
  );
}
