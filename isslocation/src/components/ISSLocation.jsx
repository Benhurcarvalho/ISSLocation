import React, { Component } from 'react';
import Map, { Marker } from 'pigeon-maps';

class ISSLocation extends Component {
  render() {
    return (
      <main>
        <div className='map'>
            <Map
                center={ [0,0] }
                defaultWidth= { 450 }
                height={ 450 }
                minZoom={ 1.5 }
                maxZoom={ 50 }
                zoom={ 1.5 }
            />

        </div>
      </main>
    )
  }
}

export default ISSLocation;