import React, {useEffect, useState} from 'react';
import './App.scss';
import search from './img/search.svg';
import Task from "./components/Task";


export interface ITask {
  id: number;
  text: string;
  isDone: boolean;
  isFound: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    setTasks(JSON.parse(localStorage.tasks))
    debugger
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    const newTask = {
      id: Date.now(),
      text: value,
      isDone: false,
      isFound: false
    }
    setTasks([...tasks, newTask]);
    setValue('');
  }

  function removeTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function searchTask() {
    if (value) {
      const found = tasks.map(task => {
        if (!task.text.toLowerCase().includes(value.toLowerCase())) {
          return {...task, isFound: true};
        }
        return {...task, isFound: false};
      });
      setTasks(found);
      debugger
    } else {
      const found = tasks.map(task => {return {...task, isFound: false}});
      setTasks(found);
    }
  }

  function doneTask(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, isDone: !task.isDone};
      }
      return task;
    });
    setTasks(newTasks);
  }

  const taskItem = tasks.map((task, index) => <Task key={task.id}
                                                                  number={index + 1}
                                                                  id={task.id}
                                                                  text={task.text}
                                                                  isDone={task.isDone}
                                                                  isFound={task.isFound}
                                                                  remove={removeTask}
                                                                  done={doneTask}/>);

  const notFound = tasks.every(task => task.isFound)

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
            <div onClick={searchTask} className="action__img">
              <img src={search} alt="search"/>
            </div>
          </div>
          <div className="action__create" onClick={addTask}>+</div>
        </div>
        {!notFound
          ?  taskItem
          : <div className="notFound">Tasks not found!</div>}
      </div>
    </div>
  );
}

export default App;
