import React from 'react';
import Founder from './Founder';


function About(props){

  // let myStyle={
  //   color: props.mode==='dark'?'white':'black',
  //   // backgroundColor:props.mode==='dark'?'gray':'white'
  //   }
    return (
      <div >
        <Founder mode={props.mode}/>
      </div>
    )
  
}
export default About;