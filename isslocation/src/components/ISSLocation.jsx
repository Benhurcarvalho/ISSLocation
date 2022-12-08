import React, { Component } from 'react';
import Map, { Marker } from 'pigeon-maps';

class ISSLocation extends Component {
  render() {
    return (
      <main>
        <img className='ISSimg' src="https://img.icons8.com/external-flat-berkahicon/64/null/external-Satellite-astronomy-flat-berkahicon.png" alt=''/>
        <div className='map'>
            <Map
                center={ [0,0] }
                defaultWidth= { 450 }
                height={ 450 }
                minZoom={ 1.5 }
                maxZoom={ 50 }
                zoom={ 1.5 }
            >
                <Marker 
                
                anchor={ [0,0] } />
            </ Map>

        </div>
      </main>
    )
  }
}

export default ISSLocation;