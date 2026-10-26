import { useState } from 'react';

function TodoList() {
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);

function handleAddTask() {
if (task.trim() === '') {
return;
}

setTasks([...tasks, task]);
setTask('');

}

function handleDeleteTask(indexToDelete) {
setTasks(
tasks.filter((_, index) => index !== indexToDelete)
);
}

return (
<section>
<h2>Todo List</h2>

  <input
    type="text"
    value={task}
    onChange={(event) => setTask(event.target.value)}
    placeholder="Enter a task"
  />

  <button onClick={handleAddTask}>Add </button>

  <ul>
    {tasks.map((item, index) => (
      <li key={index}>
        {item}
        <button onClick={() => handleDeleteTask(index)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
</section>

);
}

export default TodoList;