import React from "react";
import { Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import "./Todo.css";

const TodoItem = props => {

    let cardClass = "toDoItem"
    if (props.item.complete) {
        cardClass = cardClass + " complete"
    }

    const handleClick = () => {
        props.toggleComplete(props.item.id);
    }

    return (
        <Card onClick={handleClick} className={cardClass}>
            <h4><CheckBoxOutlineBlankIcon className="not-completed"/> {props.item.task}</h4>
        </Card>
    );
}

export default TodoItem;