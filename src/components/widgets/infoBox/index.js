import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

class InfoBox extends Component {
  
  static defaultProps = {
    icon: faEnvelope,
    title: 'Hello',
    number: 99,
    className: '',
    inverse: true,
    theme: '',
    color: '',
  }

  render() {
    const { icon, title, number, color, className, inverse, theme, progress, descProgress } = this.props
    return (
      <React.Fragment>
        <div className={`info-box ${className} ${theme}`}>
          <span className={ `info-box-icon ${color}` }>
            <FontAwesomeIcon inverse={inverse} icon={icon} />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">{title}</span>
            <span className="info-box-number">{number}</span>
            {
              progress && 
              <React.Fragment>
                <div class="progress">
                  <div class="progress-bar" style={{width: `${progress}` + '%'}}></div>
                </div>
                <span class="progress-description">
                  {descProgress}
                </span>
              </React.Fragment>
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

InfoBox.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  number: PropTypes.number,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  theme: PropTypes.string,
};

export default InfoBox
