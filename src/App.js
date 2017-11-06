import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

//account/user component/dependency
import OAuthButton from './components/account/OAuthButton';
import UserInfo from './components/common/UserInfo';
import { auth } from './utils/firebase';

import Home from './components/views/Home'
import Login from './components/views/Login'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };

  } // end of constructor

  componentWillMount() {
    auth.onAuthStateChanged(newUser => {
      this.setState({currentUser: newUser ? newUser : null});
    });
  } // end of componentWillMount()

  render() {
    if(this.state.currentUser) {
      return (<Home currentUser={this.state.currentUser} />);
    }
    else {
      return (<OAuthButton currentUser={this.state.currentUser} />);
    }
return (
    <Router>
          <div>
            <nav>
              <Link to='/' exact= { true } >Login</Link>
              <Link to='/home' >Home</Link>

            </nav>
            <Switch>
              <Route exact path='/' component={ Login } />
              <Route path='/home' component={ Home } />
            </Switch>
          </div>
        </Router>
        )
  } // end of render()

  /*
  <div className="App">
        <OAuthButton onClick={ this._handleClick } currentUser={ this.state.currentUser } />

        <header>
          <section className="brand">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="name">Food Dice</h1>
          </section>
          <OAuthButton currentUser={this.state.currentUser} />
        </header>
        <main>
          <UserInfo currentUser={this.state.currentUser}  />
        </main>
      </div>
      */
}
