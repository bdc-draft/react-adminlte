import React, { Component } from 'react'
import './index.scss';

class ContentHeader extends Component { 
  render() {
    return (
      <React.Fragment>
        <section className="content-header">
          <h1>
            Widgets
            <small>Info Box</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Widgets</li>
          </ol>
        </section>
      </React.Fragment>
    )
  }
}

export default ContentHeader