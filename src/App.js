import Home from "./Components/Home";
// import Pic from "./Assets/Project1.jpg";
import "./Components/index.css";
import Project from "./Components/Projects"
import { Route,Link,Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  
 const [display,setDisplay]=useState(false);

 const changeState=()=>{
  setDisplay(!display);
 }

  return (
<>
    <div>
       <div className="horiNav">
<ul className="navBar">
    <li>
<Link to="/" className="link">Home</Link>        
    </li>
    <li>
  <Link to="/Pr" className="link">Projects</Link>
    </li>
    <li>
    <Link to="/Blog" className="link">Blog</Link>
    </li>
</ul>

    </div>
    <div className="vertiNav">
<FontAwesomeIcon icon={faBars} onClick={changeState} />

<div className={display ? 'showMenu' : 'hide'}>

<FontAwesomeIcon  icon={faClose} className="closeBtn" onClick={changeState}/>
<ul className="navBar2">
    <li>
<Link to="/" className="link">Home</Link>        
    </li>
    <li>
  <Link to="/Pr" className="link">Projects</Link>
    </li>
    <li>
    <Link to="/Blog" className="link">Blog</Link>
    </li>
</ul>

    </div>

    </div>
    </div>
    <div className="App">
      <Routes>
        
   <Route path="/" element={<Home/>}/>
  <Route path="/Pr" element={ <Project/>}/>
      </Routes>
    </div>
    </> );
}

export default App;
