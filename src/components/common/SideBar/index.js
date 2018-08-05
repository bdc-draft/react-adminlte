import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

import './index.scss';

class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="main-sidebar__wrapper">
          <div className="main-sidebar__wrapper__user-panel">
            <div className="image">
              <img src="./img/user2-160x160.jpg" className="img-circle" alt="User" />
            </div>
            <div className="info">
              <p>Alexander Pierce</p>
              <a href="javascript:;" className="status">
                <FontAwesomeIcon icon={faCircle} className="text-success" />
                Online
              </a>
            </div>
          </div>
          <div className="main-sidebar__wrapper__search-box input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..."/>
            <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
            </span>
          </div>
          <ul className="main-sidebar__wrapper__tree">

          </ul>
        </section>
      </aside>
    )
  }
}

export default SideBar