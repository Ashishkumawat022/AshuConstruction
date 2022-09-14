import React from "react";
import Accomp from "./Accomp";
import Banner from "./Banner";
import Founder from "./Founder";
// import Cocar from "./Cocar";
import Map from "./Map";


function Home(props){
   
    return(
        <>
        <Banner />
        <Accomp mode={props.mode} />
        <Founder mode={props.mode}/>
        {/* <Cocar/> */}


        <Map mode={props.mode}/>
        
        </>
    )
}

export default Home;