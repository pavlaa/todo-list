import React, {useState} from 'react';
import './App.scss';
import search from './img/search.svg';
import Task from "./components/Task";


export interface ITask {
  id: number;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [value, setValue] = useState('');

  const taskItem = tasks.map(task => <Task key={task.id}
                                           id={task.id}
                                           text={task.text}
                                           tasks={tasks}
                                           setTasks={setTasks}/>);

  function addNewTask() {
    const newId = tasks.length + 1;
    const newTask = {
      id: newId,
      text: value,
    }

    setTasks([...tasks, newTask]);
    setValue('');
  }

  return (
    <div className="todo">
      <div className="_container">
        <div className="todo__title">To Do List</div>
        <div className="todo__action action">
          <div className="action__search">
            <input value={value}
                   onChange={e => setValue(e.target.value)}
                   type="text" name="search"
                   placeholder="Find or add task..."
            />
            <div className="action__img">
              <img src={search} alt="search"/>
            </div>
          </div>
          <div className="action__create" onClick={addNewTask}>+</div>
        </div>
        {taskItem}
      </div>
    </div>
  );
}

export default App;
