import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName:""
        };
    }

    handleChange = e => {
        this.setState({
            taskName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.taskName !== "") {
            this.props.addTask(this.state.task);
            this.setState({
                taskname: ""
            });
        }
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                    onChange = {this.handleChange}
                    type = "text"
                    name = "task"
                    value = {this.state.taskName}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;