import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss'

// Components
import ToDoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import Logo from './images/check-logo.png'

// Data
const toDoData = []

class App extends React.Component {

  state = {
    todoList: toDoData
  };

  toggleComplete = itemId => {
    console.log('toggle complete: ', itemId)
    this.setState({
      todoList: this.state.todoList.map( item => {
        if(item.id === itemId) {
          return {
            ...item,
            complete: !item.complete
          };
        }
        return item;
      })
    })
  }

  clearComplete = () => {
    console.log('clear complete')
    this.setState({
      todoList: this.state.todoList.filter(item => {
        return !item.complete;
      })
    })
  }

  addTask = taskName => {
    console.log('add item: ', taskName)
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: Date.now(),
          task: taskName,
          completed: false
        }
      ]
    })
  }

  render() {
    return (
      <div className="app-container">
        <div className="container-fluid header">
          <div className="container welcomeHeader">
            <img src={Logo} className="welcomeLogo" alt="To Do List Logo"/>
            <h1 className="welcomeText">Welcome Back, Chris</h1>
          </div>
          
          <div className="container">
            <ToDoForm
              addTask = {this.addTask}
            />
          </div>
        </div>
        
        <TodoList
          todoList = {this.state.todoList}
          toggleComplete={this.toggleComplete}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
