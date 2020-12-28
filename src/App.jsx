import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { v4 } from "uuid";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const onNewTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        txt: task,
      },
    ]);
  };

  const onRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container'>
      <AddTaskForm onNewTask={onNewTask} />
      <TaskList tasks={tasks} onRemoveTask={onRemoveTask} />
    </div>
  );
}
