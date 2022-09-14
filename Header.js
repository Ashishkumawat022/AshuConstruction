import React from "react";
// import './Header.css';

function Header(props){

    let headerStyle={
        color:"White",
        backgroundColor:"#098896",
    }

    // let myStyle={
    //     color: props.mode==='dark'?'white':'black',
    //  //  backgroundColor:props.mode==='dark'?'gray':'white'
    //   }

    return(
        <>
       
        <div className="" style={headerStyle}> 
            <h1 className="text-center p-4 "> Ashu Construction</h1>
           
        </div>
        </>
    )
}

export default Header;