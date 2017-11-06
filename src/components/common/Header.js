import React, { Component } from 'react';



//account/user component/dependency
import OAuthButton from '../../components/account/OAuthButton';
import UserInfo from '../../components/common/UserInfo';
import { auth } from '../../utils/firebase';
import LogoutButton from '../../components/account/LogoutButton.js';

class Header extends Component {
  getUserInfo(){
    if (this.props.currentUser){
      //if user is logged in.....
      let displayName;
      if (this.props.currentUser.displayName && this.props.displayName.length > 0){
        displayName = this.props.currentUser.displayName;
      } else {
        displayName = this.props.currentUser.email;
      }
      return (
        <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
          <img className='profile-picture'
            src={this.props.currentUser.photoURL} alt='profile picture' />
            {displayName} <span className='caret'></span>
        </a>
      );
    }else{
      //when no user logged in
      return <OAuthButton>Log in with GitHub account</OAuthButton>;
    }
  }

  render() {
    return (
      <nav className='navbar navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-container'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded="false" aria-controls="navbar">
              <span className='sr-only'>Toggle Navigation</span>
            </button>

          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown'>
                {this.getUserInfo()}
                <ul className='dropdown-menu'>

                  <li role='separator' className='divider'></li>
                  <li><LogoutButton>Log Out</LogoutButton></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
