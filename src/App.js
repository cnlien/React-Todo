import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {};
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List</h2>
      </div>
    );
  }
}

export default App;
