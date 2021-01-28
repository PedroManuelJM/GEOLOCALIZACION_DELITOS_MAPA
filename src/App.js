import React from "react";
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
//import useSwr from "swr";
import * as delitosData from "./data/delitos.json";
//const fetcher = (...args) => fetch(...args).then(response => response.json());

const icon = new Icon({
  iconUrl: "/robo.svg",
  iconSize: [25, 25]
});
export default function App() {
  /*
    const url =
   "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    const { data, error } = useSwr(url, fetcher);
    console.log(data);
    const crimes= data && !error ? data.slice(0,10):[];*/
  //const [activeCrime, setActiveCrime ] = React.useState(null);
  const [activePark, setActivePark] = React.useState(null);
  //console.log(activeCrime); ver los datos por consola 
  return (
    <section id="mapa">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <MapContainer center={[-12.0622, -77.0286]} zoom={12}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {delitosData.delitos.map(park => (
                <Marker
                  key={park.location.id}
                  position={[
                    park.location.latitude,
                    park.location.longitude
                  ]}
                  eventHandlers={{ click: () => { setActivePark(park); }, }}

                  icon={icon}
                />
              ))}

              {activePark && (
                <Popup
                  position={[
                    activePark.location.latitude,
                    activePark.location.longitude
                  ]}
                  onClose={() => {
                    setActivePark(null);
                  }}
                >
                  <div>
                    <span className="badge badge-info"> Delito : {activePark.category}</span>
                    <p> Lugar : {activePark.location.street.name}</p>
                  </div>
                </Popup>
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ESTO ES CUANDO HAY UNA API


  const url =
  "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, fetcher);
  console.log(data);
  const crimes= data && !error ? data.slice(0,10):[];
  const [activeCrime, setActiveCrime ] = React.useState(null);

  console.log(activeCrime);
  return (
      <MapContainer  center={[52.6376, -1.135171]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {crimes.map(crime => (
        <Marker
          key={crime.id}
          position={[crime.location.latitude, crime.location.longitude]}
          icon={icon}
          eventHandlers={{click: () => { setActiveCrime(crime);}, }}

        />
      ))}


      {activeCrime && (
        <Popup
          position={[
            activeCrime.location.latitude,
            activeCrime.location.longitude
          ]}
          onClose={() => {
            setActiveCrime(null);
          }}
        >
          <div>
            <h2>{activeCrime.category}</h2>
            <h2>{activeCrime.location.latitude}</h2>
            <h2>{activeCrime.location.longitude}</h2>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}*/

