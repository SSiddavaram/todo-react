import React from 'react';
import CreateTodo from './create-todo'
import TodosList from './todos-list'

const todos = [
	{
		task: 'juint testing',
		isCompleted: false 
	}, 
	{
		task: 'todo react app',
		isCompleted: true
	}
]

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos
		};
	}

	render() {
		return (
			<div>
				<h1>Todo React App</h1>
				<CreateTodo createTask = {this.createTask.bind(this)} />
				<TodosList todos = {this.state.todos} toggleTask={this.toggleTask.bind(this)} />
			</div>
		);
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({todos: this.state.todos});
	}

	toggleTask(task){
		const foundTodo = _.find(this.state.todos, function(todo){
			return todo.task === task;
		});
		foundTodo.isCompleted = !foundTodo.isCompleted;
		console.log(this.state.todos);
		this.setState({todos: this.state.todos});
	}
}