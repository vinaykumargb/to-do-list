import { useRef } from "react";

export default function AddTaskForm({ onNewTask = (f) => f }) {
  const input = useRef();

  return (
    <form
      className='task-form'
      onSubmit={(e) => {
        e.preventDefault();
        onNewTask(input.current.value);
        input.current.value = "";
      }}
    >
      <input ref={input} type='text' placeholder='Enter a task' required />
      <button type='submit' className='material-icons'>
        add_task
      </button>
    </form>
  );
}
