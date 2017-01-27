import _ from 'underscore';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
	renderTodos() {
		const props = _.omit(this.props, 'todos');
		return _.map(this.props.todos, function(todo, index){			
			console.log(todo);
			return <TodosListItem key={index} {...todo} {...props} />;
		});
	}

	render() {
		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderTodos()}
				</tbody>
			</table>
		);
	}
}