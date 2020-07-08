import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.scss'

class ToDoForm extends React.Component {

    render() {
        return (
            <div id="toDoFormContainer">
                <div className="row toDoTitle">
                    <h1>Whatcha up to today?</h1>
                </div>

                <div className="row toDoForm">
                    <div className="toDoInputs">
                        <div className="toDoInput toDoItem">
                            <input type="text" class="form-control" placeholder="Start Typing"/>
                        </div>

                        <div className="toDoInput toDoCategory">
                            <select type="text" class="form-control" placeholder="Select a Category">
                                <option>Category...</option>
                                <option>Honey-Do List</option>
                                <option>Shopping List</option>
                                <option>Low Priority</option>
                            </select>
                        </div>

                        <div class="toDoButton">
                            <button type="submit" class="btn btn-light toDoAddItem">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoForm;
