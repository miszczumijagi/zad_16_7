import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={style.TodoList}>
				<ul>{this.props.data.map(item => (
					<li key={item.id}>
						{item.text}
						<button className="removeButton" onClick={()=> this.props.remove(item.id)}> Delete</button>
					</li>

				))}</ul>
			</div>
		)
	}			

}


export default TodoList;