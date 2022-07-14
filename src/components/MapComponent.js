import React, { useEffect, useRef, useState } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { config } from '../config/config';
import Model from './Model';
import { isPointWithinRadius } from 'geolib';
const MapComponent = (props) => {
    const {locationInput, mapCenter, userLocation, eventDetails} = props
    const [openModel, setOpenModel] = useState(false)
    const [filteredEvents, setFilteredEvents] = useState([])
    function coordinates(event){
      const point = {
        latitude: parseFloat(event.lat),
        longitude: parseFloat(event.long)
      }
      const centerPoint = {
        latitude: parseFloat(userLocation.lat),
        longitude: parseFloat(userLocation.long)
      }
      const radius = 10000;
      if(isPointWithinRadius(point, centerPoint, radius))
      return true
      else return false
    }
    // const center
  return (
      <>
        <Wrapper apiKey={config.apiKey}>
            <MyMap setFilteredEvents={setFilteredEvents} setOpenModel={setOpenModel} coordinates={coordinates} userLocation={userLocation} locationInput={locationInput} eventDetails={eventDetails} />
        </Wrapper>
        <div>
          { openModel &&
            <Model
              closeModel={setOpenModel}
              // clickedDate={date}
              events={
                (filteredEvents ? filteredEvents : eventDetails)
              }
              /> }

        </div>
      </>
  )
}

export default MapComponent

function MyMap(props) {
    const ref = useRef(null);
    const { locationInput, setFilteredEvents, coordinates, userLocation, eventDetails, setOpenModel } = props

    // console.log(eventDetails)

    useEffect(() => {
      const map = new window.google.maps.Map(ref.current, {
        center:{
            lat: (userLocation.lat) ?  userLocation.lat : 33.4484 ,
            lng: (userLocation.long) ? userLocation.long: -112.0740
        },
        zoom: 11,
      });
      const allMarker = eventDetails.map((element, index, array) =>  (
        ((element.long) && (element.lat) && coordinates(element)) && (
             (new window.google.maps.Marker({
              // 33.48551298768824, -112.0184054459257
              position: {lat: parseFloat(element.lat), lng: parseFloat(element.long)},
              map: map,
              title: element.name,
            })).addListener("click", () => {
                setFilteredEvents(element)
                setOpenModel(true)
              })

        )
      ));
          // console.log(allMarker)


    },[userLocation]);

    return <div ref={ref} id="map" />;
  }