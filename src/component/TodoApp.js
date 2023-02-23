import React, { Component,text } from 'react'

import "./TodoApp.css"
export default class TodoApp extends Component {

      state ={
        input: " "
      }
  
 handleChange =event => {
  this.setState({
    input: event.target.value
 });
 console.log(this.state.input);
 };
 
  render() {
    const{input} =this.state;
    return (
      <div className="todo-container">
        <div className='todoAndInputField'>
        <h1>Todo App </h1>
        <form className="inputSession">
            <input type={text} vlaue={input} onChange={this.handleChange} placeholder="enter the item's"></input>
            {/* <button type={submit}> add</button> */}
          
        </form>
        </div>
        <ul>
                <li > hey  <i className="fa-solid fa-trash"></i></li>
                <li> hey <i className="fa-solid fa-trash"></i></li>
                <li> hey <i className="fa-solid fa-trash"></i></li>
                <li> hey <i className="fa-solid fa-trash"></i></li>

            </ul>
      </div>
    )
  }
}
