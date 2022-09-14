import React from "react";
import AcItemComp from "./AcItemComp";
import build from  './build.jpg'
import repairs from './repairs.jpg'
import demolished from './demolished.jpg'
import foundation1 from './foundation1.jpg'
import painting from './painting.jpg'
import interior from './interior.jpg'

function Accomp(props){
    
    return(
        <div className='container my-3  ' >
            <h1 className="text-center my-2 mt-15 py-2" style={{color: props.mode==='dark'?'white':'black'}}>Our Services</h1>
            < div className="row  ">
                <div className="col-md-4 py-2 ">
                 <AcItemComp url={build } head=" Building Construction " desc=" we Build Home   Buildings  Villa's Havelis and all type of construction work . "/>
                 </div>
                 <div className="col-md-4 py-2  ">
                 <AcItemComp url={repairs } head="Buildings Repair's " desc="Also we  Reapair and Maintenance  Old build construction    "/>
                 </div>
                 <div className="col-md-4 py-2">
                 <AcItemComp url={demolished} head=" Demolotion " desc=" we Provide Demolished  services  and Start work with initial level " />
                 </div>
        
            </div>

            < div className="row  ">
                <div className="col-md-4 py-2 ">
                 <AcItemComp url={foundation1}  head="Foundation" desc=" we does make foundation Beacuse of long life of your Construction . it's very Benifecial ."/>
                 </div>
                 <div className="col-md-4 py-2  ">
                 <AcItemComp url={painting} head="painting" desc=" Aslo We provide Painting Services . we  have best Team for  painting interior designer"/>
                 </div>
                 <div className="col-md-4 py-2">
                 <AcItemComp url={interior} head="Interior and exterior "  desc=" Also We Design Interior And Exterior .We design fully furnitured interior .   "/>
                 </div>
        
            </div>
            

        </div>
    )
}

export default Accomp;