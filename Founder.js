import React from 'react'
import DR from './DR.jpg'

function Founder(props) {
   
       

  return (
<>

    <h1 className={`text-center  mx-2 my-2 mt-4 mb-4 text-${props.mode=== 'light'?'dark':'light'}`}> About Us </h1>
    <div className='container text-center bg-warning px-2 py-1 rounded-bottom' >
     
        <img  className=" rounded-circle img-fluid pt-2" src={DR} alt=""  style={{width:"25vw", height:'32vh'}}/>
        <br />
        <p className='pt-2' style={{color:"black"}}><strong> || FOUNDER AND C.E.O OF ASHU CONSTRUCTION || </strong></p> 
        <p style={{color:"#1000f5"}}><strong> MR. Gouri Shankar Kumawat </strong></p>
       <p style={ {color:'white'}} className=""> 
       Ashu Construction has been a pioneering name in the real estate construction market of Jaipur. Turning vision into reality, the Founder of Ashu construction Mr Gouri Shankar Kumawat it was established in 1996 in jaipur . Director Mr Gouri Shankar Kumawat aspire to spread their wings wider and help you in accomplishing your idea of a dream house. With its headquarters based in Jaipur, Ashu Construction promises excellent returns. We boast of a diverse portfolio that covers Property development and Property Management Services. Over the last 25 years, the company has successfully completed 200+ land development projects. Our projects are designed to cater to all segments.Ashu Construction believe in keeping pace with the fast-changing world and uses modern present-day equipments in construction. </p>
            

    </div>
    </>
  )
}

export default Founder