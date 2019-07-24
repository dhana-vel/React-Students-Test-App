import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import { BrowserRouter as Router, Route} from 'react-router-dom';
//pages
import Login from "./modules/login/login";
import List from "./modules/list/list";
import Signup from "./modules/signup/signup";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Header/>
        <div className="main-container">
          <Router>
            <Route exact path = "/" component = {Login}/>
            <Route path = "/list" component = {List} />
            <Route path = "/login" component = {Login} />
            <Route path = "/signup" component = {Signup} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
