import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.scss'

// Comoponents
import TodoItem from './TodoItem'

const TodoList = props => {
    return (
        <div id="toDoListContainer">

            <div className="container-fluid">
                <div className="container toDoItems">
                    {props.todoList.map (item => (
                        <TodoItem
                            key={item.id}
                            item = {item}
                            toggleComplete = {props.toggleComplete}
                        />
                    ))}
                </div>
                <div className="container clear-container">
                    <button
                        className="btn-light btn clear-todo"
                        onClick={props.clearComplete}
                    >
                        Clear Complete
                    </button>          
                </div>
            </div>  
        </div>
    );
}

export default TodoList;
  