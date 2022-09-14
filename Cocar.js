import React from 'react'

function Cocar(props) {
  return (
    <div>
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="card shadow-sm p-1 mb-5 bg-body rounded carousel-item " >
            <img src={props.url} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">{props.desc}</p>
        </div>
    </div>

    <div className="card shadow-sm p-1 mb-5 bg-body rounded carousel-item " >
            <img src={props.url} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">{props.desc}</p>
        </div>
    </div>

    <div className="card shadow-sm p-1 mb-5 bg-body rounded carousel-item " >
            <img src={props.url} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">{props.desc}</p>
        </div>
    </div>

  </div>
       
</div>
</div>
  )
}

export default Cocar;