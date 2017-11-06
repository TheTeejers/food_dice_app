import React, { Component } from 'react';
import {auth} from '../../utils/firebase.js';

class LogoutButton extends Component {
  handleClick(){
    auth.signOut();
  }

  render() {
    return (
      <a onClick={this.handleClick} href="#">{ this.props.children }</a>
    )
  }
}

export default LogoutButton;
