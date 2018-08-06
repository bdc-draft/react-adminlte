import React, { Component } from 'react'
import InfoBox from '../components/widgets/infoBox'
import { faEnvelope, faFlag, faFile, faStar } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

class LayoutInfoBox extends Component { 
  render() {
    return (
      <React.Fragment>
        <div className="col-md-3">
          <InfoBox 
            icon={faEnvelope}
            title={'Phung Beo'}
            number={1989}
            color={'bg-aqua'}
            className={'demo'}
            inverse
          />
        </div>
        <div className="col-md-3">
          <InfoBox 
            icon={faFlag}
            title={'Hello'}
            number={2314}
            color={'bg-green'}
            inverse
          />
        </div>
        <div className="col-md-3">
          <InfoBox 
            icon={faFile}
            title={'Hello'}
            number={2018}
            color={'bg-yellow'}
            inverse
          />
        </div>
        <div className="col-md-3">
          <InfoBox 
            icon={faStar}
            title={'Hello'}
            number={1987}
            color={'bg-red'}
            inverse
          />
        </div>
        <div className="col-md-3">
          <InfoBox 
            icon={faStar}
            title={'Hello'}
            number={1987}
            theme={'bg-aqua'}
            inverse
            progress={70}
            descProgress={'70% Increase in 30 Days'}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default LayoutInfoBox
