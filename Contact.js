import React from 'react'
import Map from "./Map";
function Contact(props) {

    const send=()=>{
        alert(' Details are submitted Successfully')
    }

  return (
    <div>        
<section className="mb-4 bg-warning  text-dark px-4 py-4" >

   
    <h2 className="h1-responsive font-weight-bold text-center my-4 " style={{color: props.mode==='dark'?'white':'black'}}>Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5" style={{color: props.mode==='dark'?'blue':'black'}}> <strong>  Contact us directly We Will  help you .</strong></p>

    <div className="row">

       
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

              
                <div className="row">

                  
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="" style={{color: props.mode==='dark'?'blue':'black'}} >Your name</label>
                        </div>
                    </div>
                   

                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="" style={{color: props.mode==='dark'?'blue':'black'}}>Your email</label>
                        </div>
                    </div>
                   

                </div>
             
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="" style={{color: props.mode==='dark'?'blue':'black'}}>Subject</label>
                        </div>
                    </div>
                </div>
                

               
                <div className="row">

                  
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label htmlFor="message" style={{color: props.mode==='dark'?'blue':'black'}}>Your message</label>
                        </div>

                    </div>
                </div>
               

            </form>

            <div className="text-center text-md-left">
                <button className="btn btn-primary" onClick={send} style={{color: props.mode==='dark'?'white':'black'}}>Send</button>
            </div>
            <div className="status"></div>
        </div>
        

        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p style={{color: props.mode==='dark'?'white':'black'}}>Ashu Construction , Lalchandpura Niwaru Road ,jhotwara  jaipur Rajasthan India</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p style={{color: props.mode==='dark'?'white':'black'}}>
                        <strong>+91  9950571210 </strong></p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p style={{color: props.mode==='dark'?'blue':'black'}}>ashuconstruction1996@gmail.com</p>
                </li>
            </ul>
        </div>
        

    </div>

</section>

<Map mode={props.mode}/>

    </div>
  )
}

export default Contact;