import React, { Component,text,submit } from 'react'

import "./TodoApp.css"
export default class TodoApp extends Component {
  render() {
    return (
      <div class="todo-container">
        <div className='todoAndInputField'>
        <h1>Todo App </h1>
        <form class="inputSession">
            <input type={text} placeholder="enter the item's"></input>
            {/* <button type={submit}> add</button> */}
          
        </form>
        </div>
        <ul>
                <li> hey </li>
                <li> hey </li>
                <li> hey </li>
                <li> hey </li>

            </ul>
      </div>
    )
  }
}
