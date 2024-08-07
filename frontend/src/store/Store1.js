// MapComponent.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './location_marker.png';

const MapComponent = () => {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3110/admin/stores_data')
            .then(response => {
                setStores(response.data);
            })
            .catch(error => {
                console.error('Error fetching store data:', error);
            });
    }, []);

    const customIcon = new L.Icon({
        iconUrl: markerIcon,
        iconSize: [32, 32], // Adjust the size as needed
        iconAnchor: [16, 32], // Adjust the anchor point as needed
        popupAnchor: [0, -32] // Adjust the popup anchor point as needed
    });

    return (
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='map_div'>
                            <MapContainer center={[20.5937, 78.9629]} zoom={4} style={{ height: '100vh', width: '90%' }}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                                {stores.map((store, index) => (
                                    <Marker key={index} position={[store.latitude, store.longitude]} icon={customIcon}>
                                        <Popup>
                                            {store.name}
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default MapComponent;
