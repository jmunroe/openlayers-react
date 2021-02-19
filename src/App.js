import React, { useState } from 'react';

import './App.css';

import Map from "./Map";
import { Layers, TileLayer } from "./Layers";

import { fromLonLat, get } from 'ol/proj';

import * as olSource from "ol/source";

import XYZ from 'ol/source/XYZ';

function App() {
  const [center, setCenter] = useState([120, -60]);
  const [zoom, setZoom] = useState(2);

  const roads = new olSource.OSM({ opaque: false });

  const sst = new XYZ({
    url: 'http://localhost:5000/collections/sst_netcdf/coverage/tiles/WorldMercatorWGS84Quad/{z}/{x}/{y}.png?rangeSubset=SST&datetime=2000-06-01/2000-07-01',
    maxZoom: 6
    //url: 'http://localhost:5000/collections/sst_netcdf/coverage/tiles/WorldMercatorWGS84Quad/{z}/{x}/{y}.png?rangeSubset=UWND&datetime=2000-06-01/2000-07-01'
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>xarray-tiles demo</h1>
        <Map center={fromLonLat(center)} zoom={zoom}>
          <Layers>

            <TileLayer source={sst} zIndex={0} />


          </Layers>

        </Map>
      </header>
    </div>
  );
}

export default App;
