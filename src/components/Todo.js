import React from 'react';
import TodoForm from './TodoForm';
import style from './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li className={style.Todo}>
          {this.props.todo}
          <button onClick = {event=> this.handleClick()}>Delete</button>
      </li>
    )
  }
   
  handleClick(event) {
    this.props.remove(this.props.id)
  }
}   
  

export default Todo;