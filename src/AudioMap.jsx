import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './AudioMap.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import mapcordinates from "./data/jasondata_old.json";
//import 'leaflet/dist/leaflet.css';
//import { render } from '@testing-library/react';


class App extends Component {


  render() {
    return (
      <MapContainer center={[31.520370, 74.358749]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapcordinates.map(cord => (
          <Marker
            key={cord.id}
            position={[cord.gps.latitude, cord.gps.longitude]}>
            <Popup position={[cord.gps.latitude, cord.gps.longitude]}>
              <div>
                <h2>
                  {"Name: " + cord.filename}
                </h2>
                <h4>{"Category: " + cord.category}</h4>
                <p>{"Uploaded by: " + cord['data_uploaded by']}</p>
                <AudioPlayer
                  autoPlay
                  src={cord.src}
                  onPlay={e => console.log("onPlay")}
                // other props here
                />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}

export default App;
