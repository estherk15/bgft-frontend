import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

class MapComponent extends React.Component {

  render() {
    const position = [this.props.lat, this.props.lng]
    console.log(position);

    return (

        <Map className="map" center={position} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>

    );
  }
}

export default MapComponent
