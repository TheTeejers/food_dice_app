import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

//account/user component/dependency
import OAuthButton from '../account/OAuthButton';
import UserInfo from '../common/UserInfo';
import { auth } from '../../utils/firebase';

import Random from '../results/Random';
import Search from '../results/Search';
import Login from './Login'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header>
          <section className="brand">
            <h1 className="name">Food Dice</h1>
          </section>
        </header>
        <h1>What are you craving?</h1>
        <Search />
        <Random />
      </div>
    );
  }
}
  {/*
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
      */}
