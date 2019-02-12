import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

class MapComponent extends React.Component {

  render() {
    const position = [this.props.lat, this.props.lng]

    let icon = L.icon({
      iconUrl: '.../public/footprint.png',
      iconSize:     [38, 95], // size of the icon
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return (

        <Map className="map" center={position} zoom={this.props.zoom} onClick={this.props.latLngGetter}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>

    );
  }
}

export default MapComponent
