import List from "./List";
import AddTask from "./AddTask";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  // const tasks = [{ id: 0, name: "Take out the rubbish, status:true" }];
  return (
    <div className="max-w-lg mx-auto mt-96">
      <AddTask setTasks={setTasks} />
      <List setTasks={setTasks} tasks={tasks} />
    </div>
  );
}
