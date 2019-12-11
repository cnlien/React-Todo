import React from "react";
import {Form, Input, Button, Col, Row} from "reactstrap";
import "./Todo.css";


class TodoForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            taskName:""
        };
    }
    
    handleChange = e => {
        this.setState({
            taskName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
        this.setState({
            taskName: ""
        });

        // if (this.state.taskName !== "") {
        //     this.props.addTask(this.state.taskName);
        //     this.setState({
        //         taskname: ""
        //     });
        // }
    };


    render() {
        return (
            <Form onSubmit = {this.handleSubmit}>
                <Row className="newTaskForm">
                    <Col>
                        <Input
                            onChange = {this.handleChange}
                            placeholder = "What Do You Need To Do?"
                            type = "text"
                            name = "task"
                            value = {this.state.taskName}
                        />
                    </Col>
                    
                    <Col>
                        <Button>Add Task</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default TodoForm;
