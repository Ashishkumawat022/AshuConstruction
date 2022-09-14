import React from "react";
import acbanner from './acbanner.jpg'
import acbanner2 from './acbanner2.jpg'
import acbanner3 from './acbanner3.jpg'
// import './Banner.css';

function Banner(){
  let bannerStyle={
    height:'60vh',
    width:'100%'
  }

   
    return(
<>    
    <div>
   
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item">
       <img src={acbanner3} className="d-block   img-fluid" style={bannerStyle} alt="..."/>
     </div> 
    <div className="carousel-item active">
      <img src={acbanner}  style={bannerStyle} className="d-block w-100   " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={acbanner2} style={bannerStyle} className="d-block w-100" alt="..."/>
    </div>
    
    
  </div>
  <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon btn btn-primary" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon btn btn-primary" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
           
</>

    );
}


export default Banner;