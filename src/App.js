/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Semantic/components/button.css';
import './Semantic/components/header.css';
import'./Semantic/components/image.css';
import './Semantic/components/container.min.css';
import './Semantic/components/menu.min.css';
import Objectif from './components/Objectif';
import Page from './components/Page';




class App extends React.Component {

  render() {
   
    return(
      <div className="App">
        <div className="App-header">
          <header className="head">
            <Objectif
            objectif={this.props.objectifChange}
            />
          </header>
        </div>
        <div className="App-content">
          <Page />
        </div>
     </div>
    )
  }
}

export default App;
