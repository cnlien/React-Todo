import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.scss'

// icons
import { TrashFill, PencilSquare } from 'react-bootstrap-icons'

const TodoItem =(props)=> {

    let handleClick = () => {
        props.toggleComplete(props.item.id)
    }

    let cardClass = "toDoItem"
    if (props.item.complete) {
        cardClass = cardClass + " complete"
    }

    return (
            <div className={cardClass}>
                <h1 className="toDoItem--title">{props.item.task}</h1>

                <span className="toDoItem--data">
                    <p className="toDoItem--listDate">{props.item.id}</p>
                </span>

                <div className="toDoItem--operations">
                    <button className="btn-primary btn-block btn" onClick={handleClick}>Mark Complete</button>
                </div>

                <div className="toDoItem--editIcons">
                    <TrashFill className="icon deleteIcon" size={25}/>
                    <PencilSquare className="icon editIcon" size={25}/>
                </div>
            </div>
    );
}
export default TodoItem;
