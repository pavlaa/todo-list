import React from 'react';
import style from './Task.module.scss'
import done1 from "../img/check1.svg";
import done2 from "../img/check2.svg";
import deleteImg from "../img/delete.svg";


interface ITaskProps {
  id: number;
  number: number;
  text: string;
  isDone: boolean;
  isFound: boolean;
  remove: (id: number) => void;
  done: (id: number) => void;
}

const Task: React.FC<ITaskProps> = ({
                                      id,
                                      number,
                                      text,
                                      isDone, isFound,
                                      remove,
                                      done
                                    }) => {
  return (
    <>
      {
        !isFound &&
        <div className={style.task}>
          <div className={style.task__desc}>
            <div className={style.task__id}>{number}.</div>
            <div className={isDone
              ? `${style.task__text} ${style.done}`
              : style.task__text}>{text}
            </div>
          </div>
          <div className={style.task__btn}>
            <div onClick={() => done(id)} className={style.task__complete}>
              {isDone
                ? <img src={done2} alt="done-btn"/>
                : <img src={done1} alt="done-btn"/>
              }
            </div>
            <div onClick={() => remove(id)} className={style.task__delete}>
              <img src={deleteImg} alt="delete-btn"/>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Task;
