import React from "react";
import { Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import "./Todo.css";

const TodoItem = props => {
    return (
        <Card className="toDoItem">
            <CheckBoxOutlineBlankIcon className="not-completed"/>
            <h4>{props.item.task}</h4>
        </Card>
    );
}

export default TodoItem;