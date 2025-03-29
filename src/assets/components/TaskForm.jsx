import { useState } from 'react';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({ title: '', description: '' }); // Limpiar formulario
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title"
        placeholder="Add a task" 
        value={newTask.title}
        onChange={handleInputChange}
      />
      <textarea 
        name="description"
        placeholder="Description" 
        rows="3"
        value={newTask.description}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
