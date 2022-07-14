import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import CalendarComponent from './components/CalendarComponent';
import MapComponent from './components/MapComponent'
import Geocode from "react-geocode";
import { useDispatch, useSelector } from 'react-redux';
import { config } from './config/config';
import { getEventDetails } from './redux/event/actionCreators/getEventAction';
import Form from './components/Form';

function App() {
  const dispatch = useDispatch()
  Geocode.setApiKey(config.apiKey);
  const eventDetails = useSelector(state => state.getEventReducer.data)
  const [changeView, setChangeView] = useState(false)
  const [locationInput, setlocationInput] = useState('')
  // const center = {lat: 33.44844634884324, long:  -112.0762709699572}
  const center = {lat: 33.44844634884324, long:  -112.0762709699572}
  const [userLocation, setuserLocation] = useState(center)
  // console.log(userLocation)
  useEffect(() => {
    dispatch(getEventDetails())
    if('geolocation' in navigator) {
      /* If geolocation is available then setting it as the center of map or calendar */
      navigator.geolocation.getCurrentPosition(function(position) {
        /* Check Position of the device */
          // console.log("Current Latitude is :", position.coords.latitude);
          // console.log("Current Longitude is :", position.coords.longitude);
          // console.log(position)
          setuserLocation({lat: position.coords.latitude, long: position.coords.longitude})
        });
    } else {
      /* geolocation IS NOT available */
      alert("Location not available")
    }
  },[])
  const handleChange = (e) => {
    setlocationInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(locationInput)
    Geocode.fromAddress(locationInput).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setuserLocation({lat: lat, long: lng})
        // console.log(lat, lng)
      },
      (error) => {
        console.error(error);
        alert("City not Found")
      }
    );
  }
  return (
    <div className='App' style={style.root}>
      <div style={style.topBar}>
      {/* SPACE FOR LOGO AND TAGLINE */}
        <div style={style.logo}>
          LOGO
        </div>
        <div style={style.tagLineContainer}>
          TAGLINE
        </div>
      </div>
      <div style={style.body}>
      {/* LIST BY AND MAP VIEW FUNCTIONS */}
        <div style={style.catContainer}>
          <div style={style.catInput}>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} locationInput={locationInput} setlocationInput={setlocationInput}/>
          </div>
          <div style={style.viewChange}>
            <button onClick={ ()=> setChangeView(!changeView)} style={style.button}>
            { !changeView && ("MAP VIEW") }
            { changeView && ("CALENDER VIEW") }
            </button>
          </div>
        </div>
        {/* SPACE FOR MAP AND CALENDER VIEW ON SWITCH */}
        <div style={style.wrapper}>
          <div style={style.calMapContainer}>
          { !changeView && <CalendarComponent locationInput={locationInput} setlocationInput={setlocationInput} userLocation={userLocation} setuserLocation={setuserLocation} eventDetails={eventDetails}/> }
          { changeView && <MapComponent locationInput={locationInput} userLocation={userLocation} eventDetails={eventDetails} /> }
          </div>
          <div style={style.keyWordConatainer}>
            Keyword
          </div>
        </div>
        {/* ADVERTISING SPACE AND EXPORT TO FILE SPACE */}
        <div style={style.addContainer}>
          <div style={style.addSpace}>
            ADD
          </div>
          <div style={style.exportFileSpace}>
            Export
          </div>
        </div>
      </div>
      {/* <div className='App-header' >
        <CalendarComponent />
      </div>
      <div className='Map'>
          <MapComponent/>
      </div> */}
    </div>
  );
}

export default App;

const style = {
  root:{
    width: "100%",
    backgroundColor: "#0F5D99",
  },
  topBar:{
    display:"flex",
    padding: "10px",
    justifyContent: "space-between"
  },
  logo:{
    height: "70px",
    // backgroundColor:"pink",
    width: "200px"
  },
  tagLineContainer:{
    width: "400px",
    // backgroundColor:"blue",
  },
  body:{
    // backgroundColor: "green"
  },
  categoryInput:{

  },
  catContainer:{
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "violet",
    justifyContent:"space-between",
    // padding:"10px",
  },
  catInput:{
    // backgroundColor:"grey",
  },
  viewChange:{
    display:"flex",
    // backgroundColor:"white",
    alignItems: "center",
    justifyContent:"center",
    width:"15%"
  },
  button:{
    width: "140px",
    height:"45px",
    border: "none",
    backgroundColor: "cornflowerblue",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "15px",
    cursor:"pointer",
  },
  wrapper:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    height:"500px",
  },
  calMapContainer:{
    // backgroundColor:"yellow",
    width:"85%",
    paddingLeft: "10px",


  },
  keyWordConatainer:{
    // backgroundColor:"skyblue",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"15%",
  },
  addContainer:{
    display:"flex",
    flexDirection:"row",
    height:"130px",
    paddingLeft: "10px",
    // backgroundColor:"red",
    // justifyContent:"center",
    alignItems:"center"
  },
  addSpace:{
    width:"85%",
    // backgroundColor:"pink",
  },
  exportFileSpace:{
    width:"15%",
    paddingLeft:"10px"
    // backgroundColor:"#f4d",
  },
}
// Default Colors For Calender
// background: #f8f8fa;
  // color: #6f48eb;