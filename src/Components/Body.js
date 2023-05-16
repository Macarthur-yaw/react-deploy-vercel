import myPic from "../Assets/kevin.png";
import myP from "../Assets/crud.png";
import myP1 from "../Assets/Project1.jpg";
import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Body(){

const content=[
    {
        id:"num1",
        title:"Crud Application",
        content:"In this project, I built a create,read,update and delete application.",
        technologies:"Technologies: PHP, BOOTSTRAP, GIT, MYSQL",
    //  link:"thecho.netlify.app",
        img:myP
         
    },
    {
        id:"num2",
        title:"Food Ordering Site",
        content:"In this project,I built the interface for a food ordering website, where user can add items to their carts and preview.",
        technologies:"Technologies: HTML,CSS,JAVASCRIPT",
        link:"https://thecho.netlify.app",
        img:myP1

    }


]

const getInfo=content.map((key)=>{
return (
    <div className={key.id}>
    <div>
      <img src={key.img} alt="" width="200px" height="150px" />
    </div>

    <div>
      <h2>{key.title}</h2>
      
      <h4>{key.content}</h4>
      <h4 style={{color:"rgb(194, 127, 2)"}}>{key.technologies}</h4>
      {key.link && (
        <a href={key.link} className="links" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  </div>
)
})

    return(
        <div className="Body">
                  <h3 style={{color:"rgb(161, 106, 3"}}>Hi,my name is</h3>
            <h1>
               
                MACARTHUR KEVIN</h1>

                <div className="imageDiv">
<img src={myPic} alt="myself"  />

                </div>

<div className="about">
    I'm a full stack web developer with 
    much interest in solving problems.
    <br></br>
    <a href="mailto:arthurkevin1260@gmail.com"><button>Hire me</button></a>
 {" "}   <a href="mailto:arthurkevin1260@gmail.com"><button>
    Resume  <FontAwesomeIcon icon={faDownload}/>
     </button></a>

    </div>   

<div className="aboutsub" >
    Here, you can learn more about how I see the web,
    
    find some of 
 &nbsp;   <Link to="/Pr">my projects</Link>and information about me.

<br>
</br>
<br></br>
 {/* <FontAwesomeIconb style={{color:"red"}} icon={faGithub} /> */}

<div className="icons">
  <a className="icon1"  target="_blank" href="https://github.com/Macarthur-yaw" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub}/></a>
<a className="icon2"  target="_blank" href="https://twitter.com/kevinar96920007" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter}/></a>

<a className="icon3" target="_blank" href="https://www.linkedin.com/in/kevin-macarthur-795b0a232/" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
</div>
 
</div>

    <br></br>

    <div className="Projects">
        <div className="projectHeader">
            <h1>PROJECTS</h1>
<span style={{borderBottom:"2px solid"}}>
<h2 >
<Link to="/Pr" className="link"> See more &nbsp;<FontAwesomeIcon icon={faArrowRight}/></Link>
</h2>
</span>
        </div>
 {getInfo}
        </div> 

        <div className="footer" >
            <Footer/>
            </div>        
        </div>
    )
}