import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import footprint from './footprint.png'

class MapComponent extends React.Component {

  render() {
    // console.log(this.props.sightings)

    const currentPosition = [this.props.lat, this.props.lng]
    let currentLocation = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png',
      iconSize: [25, 41], // size of the icon

    });

    let sightedLocation = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png',
      iconSize: [50, 82], // size of the icon
    });



    return (

        <Map className="map" center={currentPosition} zoom={this.props.zoom} onClick={this.props.latLngGetter}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          })}

          <Marker position={currentPosition} icon={currentLocation}></Marker>

          {this.props.sightings.map(sighting => {
            const position = [sighting.lat, sighting.lng]
            if(sighting.lat){
              return <Marker position={position} icon={sightedLocation} onClick={() => this.props.sightingClick(sighting.id)}></Marker>
            } else {
              return null
            }
          })}
        </Map>

    );
  }
}

export default MapComponent

// {this.props.sightings.map(sighting => {
//   const position = [sighting.lat, sighting.lng]
//   if(sighting.lat){
//     return <Marker position={position} icon={sightedLocation}/>
//   } else {
//     return null
//   }
