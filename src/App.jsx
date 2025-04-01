import { TaskContext } from "./assets/components/context/TaskContext";
import { FormTask } from "./assets/components/TaskForm/FormTask";
import { TaskList } from "./assets/components/TaskList/TaskList"


function App() {
  return (
    <TaskContext>
      <div className="container">
        <h1>To-Do List</h1>
        <FormTask />
        <TaskList />
      </div>
    </TaskContext>
  );
}

export default App;