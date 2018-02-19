import React from 'react';
import style from './TodoForm.css';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			inputForm: '',
		}
	this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onSubmitHandler(event) {
		event.preventDefault(); 
		this.props.addTodo(this.state.inputForm);

	}
	onChange(event) {
		this.setState({inputForm: event.target.value});

	}

	render() {
		return (
			<div className= "TodoForm">
				<form  onSubmit={(event) => this.onSubmitHandler(event)}>
					<input type="text" value={this.state.inputForm} placeholder="Write new task" onChange={(event) => this.onChange(event)}/>
					<button>Add new task</button>
				</form>
			</div>
		)

	}			

}


export default TodoForm;