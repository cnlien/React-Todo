// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import TodoItem from "./TodoItem";

const TodoList = props => {

    return(
        <div className="todo-list">
            {props.todolist.map (item => (
                <TodoItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );

}

export default TodoList;