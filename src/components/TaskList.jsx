export default function TaskList({ tasks = [], onRemoveTask = (f) => f }) {
  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <span
          key={task.id}
          onClick={(e) => e.target.style.setProperty("text-decoration", "line-through")}
          className='task'
        >
          {task.txt}
          <span class='material-icons' onClick={e => onRemoveTask(task.id)}>cancel</span>
        </span>
      ))}
    </div>
  );
}
