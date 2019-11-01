import React from 'react';
import {Container} from 'reactstrap'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todolist: todoData,
    };
  }

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

      <Container>
        <h1>To Do List</h1>
        
        <TodoForm addTask={this.addTask} />

        <TodoList
          todolist = {this.state.todolist}
        />
      </Container>


    );
  }
}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



export default App;
