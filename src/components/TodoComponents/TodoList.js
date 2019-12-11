// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { Container, Row, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import "./Todo.css";

import TodoItem from "./TodoItem";

const TodoList = props => {

    return (
        <Container>
            <Row className="todo-list">
                {props.todolist.map (item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        toggleComplete={props.toggleComplete}
                    />
                ))}
                <Button className="clear-list" onClick={props.clearComplete}>Clear Completed</Button>
            </Row>
        </Container>
    );

}

export default TodoList;