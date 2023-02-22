import React, { Component,text } from 'react'

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
                <li > hey  <i class="fa-solid fa-trash"></i></li>
                <li> hey <i class="fa-solid fa-trash"></i></li>
                <li> hey <i class="fa-solid fa-trash"></i></li>
                <li> hey <i class="fa-solid fa-trash"></i></li>

            </ul>
      </div>
    )
  }
}
