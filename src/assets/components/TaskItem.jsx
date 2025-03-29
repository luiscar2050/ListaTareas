function TaskItem({ task, toggleTaskCompletion }) {
    return (
      <li className='list'>
        <input 
          type="checkbox" 
          className='checkbox' 
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <div className="task-content">
          <h2 className={task.completed ? 'completed' : ''}>{task.title}</h2>
          <p className={task.completed ? 'completed' : ''}>{task.description}</p>
        </div>
      </li>
    );
  }
  
  export default TaskItem;
  