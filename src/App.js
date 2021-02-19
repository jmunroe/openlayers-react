import React, { useState } from 'react';

import './App.css';

import Map from "./Map";
import { Layers, TileLayer } from "./Layers";

import { fromLonLat, get } from 'ol/proj';

import * as olSource from "ol/source";

import XYZ from 'ol/source/XYZ';
var key = 'r8Rjd3LN9EOP39enFB9L';

var attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

function App() {
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);

  const roads = new olSource.OSM({ opaque: false });

  const sat = new XYZ({
              attributions: attributions,
              url: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ocean Navigator</h1>
        <Map center={fromLonLat(center)} zoom={zoom}>
          <Layers>

            <TileLayer source={roads} zIndex={0} opacity={0.5}/>

            <TileLayer source={sat} zIndex={0} opacity={0.5}/>


          </Layers>

        </Map>
      </header>
    </div>
  );
}

export default App;
