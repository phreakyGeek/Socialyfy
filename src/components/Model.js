import React from 'react'

const Model = ({ closeModel, clickedDate, events }) => {
    // console.log(events)
    const displayDetails = (event, index) => {
        return (
                (( (new Date(event.startdate)).getDate() === clickedDate.getDate() ) && ( (new Date(event.startdate)).getMonth() === clickedDate.getMonth() ) && ( (new Date(event.startdate)).getFullYear() === clickedDate.getFullYear() ))
                    ? <p key={index}>  {event.name}  </p>
                    : ''
        )
    }
  return (
    <div style={style.modalBackground}>
        <div style={style.modelContainer}>
            <div style={style.titleCloseBtn}>
                <button style={style.closeButton} onClick={() => closeModel(false)}> X </button>
            </div>
            <div style={style.title}>
                <h2>
                    {clickedDate && clickedDate.toDateString()}
                    {!clickedDate && events.name}
                </h2>
            </div>
            <div style={style.body}>
                {clickedDate && events.map((event, index) => displayDetails(event, index)) }
                {!clickedDate && events.description}
            </div>
            <div style={style.footer}>

            </div>
        </div>
    </div>
  )
}

const style={
    modalBackground:{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(200, 200, 200)",
        position: "absolute",
        left: "0px",
        top: "0px",
        display:"flex",
        justifyContent: "center",
        alignItem: "center",
        padding: "25px 100px 120px 25px"
    },
    modelContainer:{
        width: "500px",
        height: "500px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        display:"flex",
        flexDirection:"column",
        padding: "25px",
        marginBottom: "100px"
    },
    titleCloseBtn:{
        display:"flex",
        justifyContent: "flex-end",
    },
    closeButton:{
        backgroundColor: "transparent",
        border: "none",
        fontSize: "25px",
        cursor: "pointer",
    },
    title:{
        display: "inline-block",
        textAlign: "center",
        marginTop: "10px",
    },
    body:{
        marginTop: "10px",
        display: "flex",
        flexDirection:"column",
        // fontSize: "1.7rem",
        // textAlign: "left",
        // padding: "25px",
    },
    footer:{

    },
}

export default Model