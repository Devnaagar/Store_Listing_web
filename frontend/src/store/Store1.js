// MapComponent.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './location_marker.png';

const MapComponent = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        // Fetch store data from backend
        axios.get('http://localhost:3110/admin/stores_data')
            .then(response => {
                setStores(response.data);
                // console.log(response.data);
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
                            <MapContainer center={[28.619702, 77.314677]} zoom={13} style={{ height: '100vh', width: '90%' } }>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                {stores.map((store, index) => (
                                    <Marker key={index} position={[store.latitude, store.longitude]} icon={customIcon}>
                                        <Popup>
                                            {/* {console.log(store.name)} */}
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
