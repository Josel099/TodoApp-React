import React, { Component,text,submit } from 'react'

import "./TodoApp.css"
export default class TodoApp extends Component {
  render() {
    return (
      <div class="todo-container">
        <h1>To do </h1>
        <div class="inputSession">
            <input type={text}></input>
            <button type={submit}> add</button>

        </div>

      </div>
    )
  }
}
