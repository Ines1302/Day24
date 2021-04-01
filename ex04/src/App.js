
import React, { Component } from 'react';

class App extends Component {
setLocalStorage = () => {
  localStorage.setItem('Arena', 'Selection Month')
}

getLocalStorage = () => {
  let myLocalStorageData = localStorage.getItem('Arena');
  
}

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>Button</button>
        <button type="button" onClick={this.getLocalStorage}>New button</button>
        
      </div>
    )
  }
}

export default App;