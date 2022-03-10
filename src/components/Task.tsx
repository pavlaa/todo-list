import React, {Dispatch, SetStateAction, useState} from 'react';
import style from './Task.module.scss'
import done1 from "../img/check1.svg";
import done2 from "../img/check2.svg";
import deleteImg from "../img/delete.svg";
import {ITask} from "../App";


interface ITaskProps {
  id: number;
  text: string;
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<[] | ITask[]>>;
}

const Task: React.FC<ITaskProps> = ({id, text, tasks, setTasks}) => {
  const [active, setActive] = useState(false)

  function changeCheck() {
    setActive(!active);
  }

  function deleteTask() {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className={style.task}>
      <div className={style.task__desc}>
        <div className={style.task__id}>{id}.</div>
        <div className={active
          ? `${style.task__text} ${style.done}`
          : style.task__text}>{text}
        </div>
      </div>
      <div className={style.task__btn}>
        <div onClick={changeCheck} className={style.task__complete}>
          {active
            ? <img src={done2} alt="done-btn"/>
            : <img src={done1} alt="done-btn"/>
          }
        </div>
        <div onClick={deleteTask} className={style.task__delete}>
          <img src={deleteImg} alt="delete-btn"/>
        </div>
      </div>
    </div>
  );
};

export default Task;