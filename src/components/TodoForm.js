import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.scss'

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ""
        };
    }

    handleChanges = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
        this.setState({
            taskName: ""
        });
    };

    

    render() {
        return (
            <div id="toDoFormContainer">
                <div className="row toDoTitle">
                    <h1>Whatcha up to today?</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row toDoForm">
                        <div className="toDoInputs">
                            <div className="toDoInput toDoItem">
                                <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Start Typing"
                                    name="task"
                                    value={this.state.taskName}
                                    onChange={this.handleChanges}
                                />
                            </div>

                            <div class="toDoButton">
                                <button type="submit" class="btn btn-light toDoAddItem">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ToDoForm;
