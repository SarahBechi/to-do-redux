
import React, { Component } from 'react';
import './style.css';
import Input from './Input';
import List from './List';
class App extends Component {




  render() {

    return (<div>

      <Input />
      <div className="get-work-done">
        <span className="get-work-done">Let's get some work done!</span>
        <hr className="ligne"></hr>
        <div className="tasks">
          <List />
        </div>
      </div>
    </div>
    );
  }
}



export default App;
