import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//account/user component/dependency
import OAuthButton from './components/account/OAuthButton';
import UserInfo from './components/common/UserInfo';
import { auth } from './utils/firebase';

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
    return (
      <div className="App">
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
    );
  } // end of render()
}
