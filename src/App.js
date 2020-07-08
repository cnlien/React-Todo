import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss'

// Components
import ToDoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import Logo from './images/check-logo.png'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="app-container">
        <div className="container-fluid header">
          <div className="container welcomeHeader">
            <img src={Logo} className="welcomeLogo" alt="To Do List Logo"/>
            <h1 className="welcomeText">Welcome Back, Chris</h1>
          </div>
          
          <div className="container">
            <ToDoForm />
          </div>
        </div>
        
        <TodoList />
      </div>
    );
  }
}

export default App;
