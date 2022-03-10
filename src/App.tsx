import React from 'react';
import './App.scss';
import search from './img/search.svg'
import deleteImg from './img/delete.svg'
import done1 from './img/check1.svg'
import done2 from './img/check2.svg'

function App() {
  return (
    <div className="todo">
      <div className="_container">
        <div className="todo__title">To Do List</div>
        <div className="todo__action action">
          <div className="action__search">
            <input type="text" name="search" placeholder="Find task..."/>
            <div className="action__img">
              <img src={search} alt="search"/>
            </div>
          </div>
          <div className="action__create">+</div>
        </div>
        <div className="todo__task task">
          <div className="task__desc">
            <div className="task__id">1.</div>
            <div className="task__text">
              Flexbox - это целый модуль, содержащий в себе набор свойств и их значений
            </div>
          </div>
          <div className="task__btn">
            <div className="task__complete">
              <img src={done1} alt="done-btn"/>
            </div>
            <div className="task__delete">
              <img src={deleteImg} alt="delete-btn"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
