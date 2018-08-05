import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faCogs } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faBell, faFlag } from '@fortawesome/free-regular-svg-icons'
import './index.scss';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="/" className="main-header__logo">
          <span className="main-header__logo--mini">
            <b>A</b>LT
          </span>
          <span className="main-header__logo--lg">
            <b>Admin</b>LTE
          </span>
        </a>
        <nav className="main-header__nav-bar">
          <a href="/" className="main-header__nav-bar__hamburger-menu">
            <FontAwesomeIcon icon={faAlignJustify}/>
            <span className="sr-only"> Toggle navigation </span>
          </a>
          <div className="main-header__nav-bar__custom-menu">
            <ul className="navbar-nav">
              <li className="messages-menu">
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <span className="label label-success">4</span>
                </a>
              </li>
              <li className="notifications-menu">
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faBell}/>
                  <span className="label label-warning">4</span>
                </a>
              </li>
              <li className="tasks-menu">
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faFlag}/>
                  <span className="label label-danger">4</span>
                </a>
              </li>
              <li className="user-menu">
                <a href="javascript:void(0);">
                  <img src="./img/user2-160x160.jpg" className="user-image" alt="User"/>
                  <span>Alexander Pierce</span>
                </a>
              </li>
              <li className="settings-menu">
                <a href="javascript:void(0);">
                  <FontAwesomeIcon icon={faCogs}/>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header