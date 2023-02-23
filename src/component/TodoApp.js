import React, { Component,text } from 'react'

import "./TodoApp.css"
export default class TodoApp extends Component {

      state ={
        input: "",
        items:[]
      }
  
 handleChange =event => {
  this.setState({
    input: event.target.value
 });
 //console.log(this.state.input);
 };
 
deleteItem=(index)=>{
  const allItems =this.state.items;
  allItems.splice(index,1);
  this.setState({
    items:allItems
  })

}


 storeItems =(event) =>{
  event.preventDefault();
  const {input } =this.state;
  // const allItems =this.state.items;
  // allItems.push(input);
  this.setState({
   items: [...this.state.items,input],
   input:""
  });
 }
  render() {
    const{input,items} =this.state;
    
    return (
      <div className="todo-container">
        <div className='todoAndInputField'>
        <h1>Todo App </h1>
        <form className="inputSession" onSubmit={this.storeItems}>
            <input type={text} value={input} onChange={this.handleChange} placeholder="enter the item's"></input>
            {/* <button type={submit}> add</button> */}
          
        </form>
        </div>
        <ul>
          {items.map((data,index) =>(
              <li key={index}> {data}  <i className="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i></li>
          ))}
              
              
            </ul>
      </div>
    )
  }
}
