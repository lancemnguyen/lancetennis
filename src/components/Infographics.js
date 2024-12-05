import Script from 'next/script';
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Infographics = () => {
    // weather
    const [selectedCity, setSelectedCity] = useState('san-jose');

    const cityData = {
        'san-jose': { href: 'https://forecast7.com/en/37d34n121d89/san-jose/?unit=us', label_1: 'SAN JOSE' },
        'milpitas': { href: 'https://forecast7.com/en/37d43n121d90/milpitas/?unit=us', label_1: 'MILPITAS' },
        'santa-clara': { href: "https://forecast7.com/en/37d35n121d96/santa-clara/?unit=us", label_1: 'SANTA CLARA' },
        'sunnyvale': { href: 'https://forecast7.com/en/37d37n122d04/sunnyvale/?unit=us', label_1: 'SUNNYVALE' },
        'mountain-view': { href: 'https://forecast7.com/en/37d39n122d08/mountain-view/?unit=us', label_1: 'MOUNTAIN VIEW' },
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };
    
    useEffect(() => {
        if (typeof window !== 'undefined' && window.__weatherwidget_init) {
            window.__weatherwidget_init();
        }
    }, [selectedCity]);

    // location
    const GOOGLE_MAPS_API = process.env.GOOGLE_MAPS_API;
    const mapContainerStyle = { width: '500px', height: '350px' };

    const locations = [
        { lat: 37.40239862373006, lng: -121.85303111718667, name: 'Piedmont Hills High School', address: '123 Piedmont St', color: 'red' }, // Piedmont
        { lat: 37.402616953570366, lng: -121.85791223941555, name: 'Sierramont Middle School', address: '3155 Kimlee Dr, San Jose, CA 95132', color: 'red' }, // Sierramont
        { lat: 37.413968106043285, lng: -121.89006581802836, name: 'Bob McGuire Park', address: '791 Garden St, Milpitas, CA 95035', color: 'blue' }, // Bob McGuire
        { lat: 37.40940596096933, lng: -121.90955973404792, name: 'Pinewood Park', address: '1375 Starlite Dr, Milpitas, CA 95035', color: 'blue' }, // Pinewood
        { lat: 37.336544053684825, lng: -121.96107188671728, name: 'Henry Schmidt Park', address: '555 Los Padres Blvd, Santa Clara, CA 95050', color: 'red' }, // Henry Schmidt
        { lat: 37.36734831658871, lng: -122.07393841140203, name: 'Cooper Park', address: 'Chesley Ave &, Yorkton Dr, Mountain View, CA 94040', color: 'red' }, // Cooper
        { lat: 37.34284225867979, lng: -122.04235191400963, name: 'Serra Park', address: '1568 Hollenbeck Ave, Sunnyvale, CA 94087', color: 'blue' }, // Serra
        { lat: 37.304088582949646, lng: -121.90979277458287, name: 'Bramhall Park', address: '1350 Willow St, San Jose, CA 95125', color: 'red' } // Bramhall
    ];

    const latSum = locations.reduce((sum, loc) => sum + loc.lat, 0);
    const lngSum = locations.reduce((sum, loc) => sum + loc.lng, 0);
    const center = { lat: latSum / locations.length, lng: lngSum / locations.length };

    const [map, setMap] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        if (map) {
        const bounds = new window.google.maps.LatLngBounds();
        locations.forEach((location) => bounds.extend(location));
        map.fitBounds(bounds);
        }
    }, [map, locations]);

    return (
        // weather
        <section
            id="infographics"
            // style={{ minHeight: 'calc(100vh - 80px)' }}
            className="flex flex-col lg:flex-row w-full py-8 sm:py-4 px-6 sm:px-8 gap-8 items-center justify-center mx-auto max-w-6xl"
        >   

            {/* location */}
            <div className="flex-1 flex justify-center items-center">
                <section id="location" className="py-14 sm:py-20 px-6 sm:px-8">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl text-center py-2">
                        Courts
                    </h1>
                    <p className="flex items-center flex-1 justify-center">(Click on a marker for details)</p>
                    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API}>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            onLoad={(mapInstance) => setMap(mapInstance)}
                        >
                            {locations.map((location, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: location.lat, lng: location.lng }}
                                    icon={`http://maps.google.com/mapfiles/ms/icons/${location.color}-dot.png`}
                                    onClick={() => setSelectedMarker(location)}
                                />
                            ))}
                            {selectedMarker && (
                                <InfoWindow
                                    position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <div>
                                        <h2>{selectedMarker.name}</h2>
                                        <p>{selectedMarker.address}</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                    <div className="legend mt-4 flex justify-center">
                        <div className="flex items-center mx-4">
                            <img
                                src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                alt="Blue Marker"
                                style={{ width: '20px', height: '20px', marginRight: '8px' }}
                            />
                            <span>Has lights</span>
                        </div>
                        <div className="flex items-center mx-4">
                            <img
                                src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                                alt="Red Marker"
                                style={{ width: '20px', height: '20px', marginRight: '8px' }}
                            />
                            <span>No lights</span>
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <div className="w-[300px]">
                    {/* <h2 className="text-4xl sm:text-4xl md:text-5xl text-center py-3 text-[#79b75c]">
                        Forecast
                    </h2> */}
                    <div className="mb-4">
                        <label htmlFor="city-select" className="mr-2">Select a city:</label>
                        <select
                            id="city-select"
                            value={selectedCity}
                            onChange={handleCityChange}
                            className="p-2 border rounded"
                        >
                            {Object.keys(cityData).map((cityKey) => (
                                <option key={cityKey} value={cityKey}>
                                    {cityData[cityKey].label_1}
                                </option>
                            ))}
                        </select>
                    </div>

                    <a
                        className="weatherwidget-io block w-full h-full"
                        href={cityData[selectedCity].href}
                        data-label_1={cityData[selectedCity].label_1 + ", CA"}
                        data-font="Ubuntu"
                        data-icons="Climacons Animated"
                        data-theme="pool_table"
                    >
                    </a>

                    {/* Lazy load the weather widget script */}
                    <Script
                        id="weatherwidget-io-js"
                        src="https://weatherwidget.io/js/widget.min.js"
                        strategy="lazyOnload"
                    />
                </div>
            </div>
        </section>
    );
};

export default Infographics;
