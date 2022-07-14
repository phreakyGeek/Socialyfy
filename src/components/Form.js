import React from 'react'

const Form = (props) => {
    const {handleSubmit, locationInput, handleChange, setlocationInput} = props
  return (
    <>
        <form style={style.root} onSubmit={handleSubmit} >
            <div style={style.cityContainer}>
                <label style={style.text}>
                    City Name / Postal Code
                </label>
                <input style={style.inputBox} type="text" value={locationInput} onChange={handleChange} />
            </div>
            {/* <div style={style.codeContainer}>
                <label style={style.text}>
                    Postal Code:
                </label>
                <input style={style.inputBox} type="text"  />
            </div> */}
            <div style={style.submitButton}>
                   <input style={style.button} type="submit" value="Submit" />
            </div>
      </form>
    </>
  )
}

export default Form

const style = {
    root:{
        display:"flex",
        alignItems: "center",
    },
    cityContainer:{
        padding:"10px",
    },
    text:{
        padding:"10px",
        fontSize:"16px"
    },
    inputBox:{
        width: "250px",
        height:"45px",
        border: "none",
        borderRadius: "4px",
    },
    codeContainer:{
        padding:"10px",
    },
    submitButton:{
        marginLeft:"10px",
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

}