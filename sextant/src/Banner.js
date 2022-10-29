import React, { Component } from 'react';
import './Banner.css';
import logo from './Cisco_logo.jpg';

class Banner extends Component {
    render() {
        return (
          <div className="Include">
            <div className="Banner">
                <h1>{this.props.bannerText}</h1>
            </div>
            <div className="BImage">
              <img src={logo} alt="cisco_image" height="100%" width="100%"/>
            </div>
          </div>
        );
    }
}

export default Banner;
