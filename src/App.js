import React from 'react';
import {Container, Card} from 'reactstrap'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todoData = [];

class App extends React.Component {
  // you will need a place to store your state in this component.

    state = {
      todolist: todoData,
    };

  toggleComplete = itemId => {
    console.log("toggleComplete: ", itemId);

    this.setState({
      todolist: this.state.todolist.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearComplete = () => {
    console.log("clearPurchased");
    this.setState ({
      todolist: this.state.todolist.filter(item =>{
        return !item.completed;
      })
    });
  };

  addTask = taskName => {
    console.log ("add item: ", taskName);

    this.setState({
      todolist: [
        ...this.state.todolist,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  render() {
    
    return(
      
      <Container className="main-container">
        
        <Card className="add-task">
          <h1>Add a Task</h1>
          <TodoForm addTask={this.addTask} />
        </Card>

        <Card className ="task-list">
          <h1>To Do List</h1>
          <TodoList
            todolist = {this.state.todolist}
            toggleComplete={this.toggleComplete}
            clearComplete={this.clearComplete}
          />
        </Card>

        {console.log(this.addTask)}
        {console.log(this.state.todolist)}

      </Container>


    );
  }
}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



export default App;
