import React, { Component } from 'react';
import latImg from '../assets/latitude.svg';
import lonImg from '../assets/longitude.svg';

class Header extends Component {
  render() {
    const latitude = 0;
    const longitude = 0;
    return (
      <div className='header'>
        <h1>Space Station Tracker</h1>
        <h1>
            <img src={ latImg } alt='' width='30' />
            { `Latitude: ${ latitude }`}
        </h1>
        <h1>
            {' '}
            <img src={ lonImg } alt="" width='30' />
            { `Longitude: ${ longitude }`}
        </h1>
      </div>
    )
  }
}

export default Header;