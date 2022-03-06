import React from 'react';
import './App.scss';
import search from './img/search.svg'

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
      </div>
    </div>
  );
}

export default App;
