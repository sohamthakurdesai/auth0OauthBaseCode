import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import Secret from './component/Secret'
import NotFound from './component/NotFound'
import Callback from './component/Callback'

class App extends Component {
  render() {

    let MainComponent;

    switch(this.props.location) {
      case "":
        MainComponent = <Main {...this.props}/>
        break;
      case "secret":
        MainComponent = this.props.auth.isAuthenticated() ? <Secret  {...this.props}/> : <NotFound/>
        break;
      case "callback":
        MainComponent = <Callback/>
        break;
      default:
        MainComponent = <NotFound/>
    }

    return (
      <div className="App">
      {MainComponent}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
