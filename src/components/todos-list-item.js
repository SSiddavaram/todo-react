import React from 'react';

export default class TodosListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing: false
		};
	}

	renderTask() {
		const { task, isCompleted } = this.props;
		console.log(this.props);
		const taskStyle = {
			color: isCompleted?'green':'red',
			cursor: 'pointer'
		};
		return (
			<td 
				style = {taskStyle}> {task}
				onClick = {this.props.toggleTask.bind(this, task)} 
			</td>
		);
	}

	renderActionSection() {
		if(this.state.isEditing) {
			return (
				<td>
					<button> Save </button>
					<button onClick={this.onCancelClick.bind(this)}> Cancel </button>
				</td>
			);
		} else {
			return (
				<td>
					<button onClick={this.onEditClick.bind(this)}> Edit </button>
					<button> Delete </button>
				</td>
			);
		}
	}

	render() {
		return (
			<tr>
				{this.renderTask()}
				{this.renderActionSection()}
			</tr>
		);
	}

	onEditClick() {
		this.setState({isEditing: true});
	}

	onCancelClick() {
		this.setState({isEditing: false});
	}
}