import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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

  // addTask = taskName => {
  //   this.setState({
  //     tasks: [
  //       ...this.state.tasks,
  //       {
  //         task: taskName,
  //         id: Date.now(),
  //         completed: false
  //       }
  //     ]
  //   });
  // }

  render() {
    return(
      <div>
        <h1>To Do List</h1>
        <p>To Do: {this.state.task}</p>
        <TodoList
          todolist = {this.state.todolist}
        />

      </div>
    );
  }
}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



export default App;
