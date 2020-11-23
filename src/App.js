import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import history from './components/history'
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";

class App extends React.Component {
  render() {
    return(
        <Router history={history}>
            <Switch>
                {/* <Route exact path="/" component={HomePage}></Route> */}
                <Route exact path="/" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </Router>
    )
  }
}

export default App;
