import List from "./List";
import AddTask from "./AddTask";

export default function Todo() {
  return (
    <div className="max-w-lg mx-auto mt-96">
      <AddTask />
      <List />
    </div>
  );
}
