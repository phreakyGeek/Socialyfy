import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Model from './Model';
import { differenceInCalendarDays } from 'date-fns';
import { isPointWithinRadius } from 'geolib';
import Geocode from "react-geocode";
import { config } from '../config/config';

const CalendarComponent = (props) => {
  Geocode.setApiKey(config.apiKey);
  const {locationInput, setlocationInput, userLocation, setuserLocation, eventDetails} = props
  // console.log(userLocation)
  const [openModel, setOpenModel] = useState(false)
  const [date, setDate] = useState(new Date());
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
  function tileDisabled({ date, view }) {
    function eventFilter(event){
      if(isSameDay((new Date(event.startdate)), date) && coordinates(event))
      return event
      else
      return null
    }
    if (view === 'month') {
      const selectedDates = eventDetails.find(eventFilter)
      if(selectedDates)
      return false
      else
      return true
    }
  }
  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }
  function tileContent({ date, view }) {


    if (view === 'month') {
      return (<p>{
        eventDetails.map(event =>
            (
                ( coordinates(event)) &&(( (new Date(event.startdate)).getDate() === date.getDate() ) && ( (new Date(event.startdate)).getMonth() === date.getMonth() ) && ( (new Date(event.startdate)).getYear() === date.getYear() ))
                && event.name
            )
        )
      }
      </p>)
    }
  }
  const onClickDay = (value, event) => {
    setOpenModel(true)
    return (
      <></>
      )
  }
  return (
    <>
      <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={onClickDay}
            tileDisabled={tileDisabled}
            tileContent={tileContent}
          />
      </div>

      <div className='Model'>
      { openModel &&
          <Model
            closeModel={setOpenModel}
            clickedDate={date}
            events={eventDetails}
            /> }
      </div>
    </>
  )
}

export default CalendarComponent