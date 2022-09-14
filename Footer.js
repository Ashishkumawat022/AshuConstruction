import React from 'react'
// import Contact from './Contact'
import {Link} from 'react-router-dom';

function Footer(props) {
  let iconStyle={
    width:'3vw'
  }

  return (
    <>
       
<footer className= {`text-center text-lg-start bg-${props.mode} text-muted`} >
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span style={{color: props.mode==='dark'?'white':'black' }}>  Get connected with us :</span>
    </div>
    
    <div>
    <a href="tel:+916375602168" className="me-4 text-reset" target="_blank">
        <i className="fab fa-google"><img src="https://w7.pngwing.com/pngs/759/922/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark-thumbnail.png" alt=""  style={iconStyle} /></i>
      </a>

      <a href="https://www.facebook.com/ashuconstruction" className="me-4 text-reset" target="_blank">
        <i className="fab fa-facebook-f"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" style={iconStyle}  /></i>
      </a>
      <a href="https://www.instagram.com/ashuconstruction1996/" className="me-4 text-reset" target="_blank">
        <i className="fab fa-twitter"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png" alt=""  style={iconStyle}  /></i>
      </a>
      <a href="https://twitter.com/ASHU_CONSTRUCT_?t=N8xavXRP1DQ7LcEnfrbz9g&s=09" className="me-4 text-reset" target="_blank">
        <i className="fab fa-google"><img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt=""  style={iconStyle} /></i>
      </a>
      <a href="mailto:ashuconstruction1996@gmail.com" className="me-4 text-reset" target="_blank">
        <i className="fab fa-google"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" alt=""  style={iconStyle} /></i>
      </a>
      
    </div>
    
  </section>
 

  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4" style={{color: props.mode==='dark'?'white':'black' }}>
            <i className="fas fa-gem me-3" style={{color: props.mode==='dark'?'white':'black' }}></i> Ashu Construction
          </h6>
          <p>
          Ashu Construction   has been a pioneering name in the real estate construction market of Jaipur. 

          Our projects are designed to cater to all segments.Ashu Construction  believe in keeping pace with the fast-changing world and uses modern present-day equipments in construction.
          </p>
        </div>
        

       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4" style={{color: props.mode==='dark'?'white':'black' }}>
            Products
          </h6>
          <p>
            Building Construction
          </p>
          <p>
           Building Repair's
          </p>
          <p>
           Demolotion
          </p>
          <p>
           Foundation
          </p>
          <p>Painting</p>
          <p>interior</p>
          <p>Exterior</p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4" style={{color: props.mode==='dark'?'white':'black' }}>
            Useful links
          </h6>
          <p>
            <Link  to="/" className="text-reset">Home</Link>
          </p>
         
          <p>
            <Link  to="/about" className="text-reset">About us</Link>
          </p>
          <p>
            <Link  to="/contact" className="text-reset">Contact us</Link>
          </p>
          <p>
            <Link  to="/gallery" className="text-reset">Gallery</Link>
          </p>
         
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4" style={{color: props.mode==='dark'?'white':'black' }}>Contact us</h6>
          <p><i className="fas fa-home "></i>Ashu Construction , Lalchandpura Niwaru Road ,jhotwara  jaipur Rajasthan India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
           <a href="mailto:ashuconstruction1996@gmail.com" target="_blank"> ashuconstruction1996@gmail.com</a> 
          </p>
          
          <p><i className="fas fa-phone me-3"></i> +91 9950571210</p>
         
        </div>
       
      </div>
     
    </div>
  </section>
  

  
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © Copyright : 
    <a className="text-reset fw-bold" href="/" style={{color: props.mode==='dark'?'white':'black'}} > AshuConstruction.com</a>
  </div>
 
</footer>

    </>
  )
}

export default Footer