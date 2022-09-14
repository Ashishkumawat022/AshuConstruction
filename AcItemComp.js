import React from "react";

function AcItemComp(props){
    return(
        <>
        
        <div style={{ borderRadious:'20px'}}>

        <div className="card shadow-sm p-1 mb-5 bg-warning rounded" >
            <img src={props.url} className="card-img-top img-fluid  " alt="..." style={{height:'50vh'}}/>
        <div className="card-body">
            <p className="card-text text-center" style={{color:"#0d4cd4"}}><strong>{props.head}</strong></p>
            <p className="card-text " >{props.desc} </p>
        </div>
    </div>
  </div>
  </>
    )
}

export default AcItemComp;