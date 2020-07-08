import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.scss'

// Comoponents
import TodoItem from './TodoItem'

class TodoList extends React.Component {

    render() {
        return (
        <div id="toDoListContainer">
            <div className="container-fluid">
                <div className="container toDoItems">
                    <div className="row">
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                    </div>
                </div>
            </div>            
        </div>
        );
    }
}

export default TodoList;
