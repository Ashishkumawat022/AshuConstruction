import React,{useEffect} from "react";
// import GoogleMapReact from 'google-map-react';

    

function Map(props){
    useEffect(() => {
        const iframeData=document.getElementById("iframeId")
        iframeData.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14221.801392378107!2d75.6860402!3d26.9843003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42c248c146590f28!2sASHU%20Construction!5e0!3m2!1sen!2sin!4v1662896500095!5m2!1sen!2sin"

        });
    return(
        <>
        <div className="container text-center mx-2 my-2 ">
            <h1 className={`text-${props.mode=== 'light'?'dark':'light'} mt-4 mb-4`}>Our Location </h1>
        <iframe id="iframeId" style={{ width:'60vw', height:'40vh'}} ></iframe>
        </div>
        </>
    );
}
    

export default Map;