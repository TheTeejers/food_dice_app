import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

//account/user component/dependency
import OAuthButton from '../account/OAuthButton';
import UserInfo from '../common/UserInfo';
import { auth } from '../../utils/firebase';

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
      <OAuthButton currentUser={this.props.currentUser} />

        <main>
          <UserInfo currentUser={ this.props.currentUser }  />
        </main>
      </div>
    );
  }
}
