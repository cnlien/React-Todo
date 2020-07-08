import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.scss'

// icons
import { TrashFill, PencilSquare } from 'react-bootstrap-icons'

class TodoItem extends React.Component {

    render() {
        return (
            <div className="col-md">
                <div className="toDoItem">
                    <h1 className="toDoItem--title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus.</h1>

                    <span className="toDoItem--data">
                        <p className="toDoItem--listCategory">Honey-Do List</p>
                        <p className="toDoItem--listDate">December 31, 2020</p>
                    </span>

                    <div className="toDoItem--operations">
                        <button className="btn-primary btn-block btn">Mark Complete</button>
                    </div>

                    <div className="toDoItem--editIcons">
                        <TrashFill className="icon deleteIcon" size={25}/>
                        <PencilSquare className="icon editIcon" size={25}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;
