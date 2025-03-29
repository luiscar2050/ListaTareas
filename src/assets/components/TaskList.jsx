import TaskItem from './TaskItem';

function TaskList({ tasks, filter, setFilter, toggleTaskCompletion }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // 'all'
  });

  return (
    <section className="task-list">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <ul className='UlContainer'>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
