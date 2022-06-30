import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
 
const Mapa = () =>{
    return <MapContainer center={{lat: -31.655782, lng: -68.277974 } }zoom={13}>
             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
    </MapContainer>
   
    
};
export default Mapa