import React,{useState} from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App(props) {

  const [mode, setMode] = useState('light');

  // let myStyle={
  //      color: props.mode==='dark'?'white':'black',
  //   //  backgroundColor:props.mode==='dark'?'gray':'white'
  //    }
 

  
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#020e47 '; 
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white ';
     
      
    }
  }

  

  return (
   <>
   <BrowserRouter>
   <Header mode={mode}/>
   <Navbar title='Ashu Construction'  mode={mode} toggleMode={toggleMode}/>
  
    <div className="container my-3"> 
    <Routes>
      <Route  path="/" element={<Home mode={mode}/>}/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route exact path="/gallery" element={<Gallary mode={mode}/>}/>
      <Route exact path="/contact" element={<Contact mode={mode} />}/>
    </Routes>
   </div>
   <Footer mode={mode} />
   </BrowserRouter>
   </>

   );
}
export default App;
