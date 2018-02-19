import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	render() {
		return(
			<div className={style.Title}>
				<h1>My day list</h1>
				<div><p>Number of items: {this.props.todoCount} </p></div>
			</div>
		)
	}
}

export default Title;