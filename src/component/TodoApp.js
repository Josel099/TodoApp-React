import React, { Component,text,submit } from 'react'

import "./TodoApp.css"
export default class TodoApp extends Component {
  render() {
    return (
      <div class="todo-container">
        <h1>To do </h1>
        <form class="inputSession">
            <input type={text} placeholder="enter the item's"></input>
            <button type={submit}> add</button>
          
        </form>
        <ul>
                <li> hey </li>

            </ul>
      </div>
    )
  }
}
