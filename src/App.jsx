import { useState } from 'react';
import TaskForm from './assets/components/TaskForm';
import TaskList from './assets/components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Barrer", description: "Realizar aseo del lugar", completed: false }
  ]);
  const [filter, setFilter] = useState('all');

  const addTask = (newTask) => {
    if (!newTask.title.trim() || !newTask.description.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      completed: false
    };

    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} filter={filter} setFilter={setFilter} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;
