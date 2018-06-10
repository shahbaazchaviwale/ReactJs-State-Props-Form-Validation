import React, { Component } from 'react';
import ItemList from './component/ui_component/ItemList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        
          <ItemList></ItemList>    
         
      </div>
    );
  }
}

export default App;
