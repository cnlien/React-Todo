import React from "react";

const TodoItem = props => {
    return (
        <div className="toDoItem">
            <h1>{props.item.task}</h1>
        </div>
    );
}

export default TodoItem;