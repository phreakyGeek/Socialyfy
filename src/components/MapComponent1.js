import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import React, { useEffect, useMemo, useState } from 'react'
import { config } from '../config/config'

const MapComponent = (props) => {
    const {mapCenter, userLocation} = props
    // const center = {lat: mapCenter.lat, lng: mapCenter.long}
    const center = {lat: 33.44844634884324, lng: -112.0762709699572}
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: config.apiKey
    })
    // const marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    //   });
    const onLoad = marker => {
        // console.log('marker: ', marker)
      }
    useEffect(()=>{


    })
    if(!isLoaded){
        return (
            <div>Loading...</div>
        )
    } else {
        return  (
        <GoogleMap
            zoom={13}
            center={center}
            mapContainerClassName="mapContainer"
        >
            <Marker
                onLoad={onLoad}
                // 33.44457857026978, -112.08811765881127
                position={{lat:33.44457857026978,lng: -112.08811765881127}}
            />
        </GoogleMap>)
    }
}


export default MapComponent