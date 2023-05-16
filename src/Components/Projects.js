import Proj1 from "../Assets/Project1.jpg";
// import Proj2 from "../Assets/WhatsApp_Image_2023-04-16_at_20.45.36-removebg-preview.png";
// import "./index.css";
import "./index.css";
import Proj3 from "../Assets/landing.png";
import Proj4 from "../Assets/crud.png";
import Footer from "./Footer";


const Project = () => {
  const myWorks = [
    {
      id:"num1",
      title:"Crud Application",
      content:"In this project, I built a Create,Read,Update and delete application.",
      technologies:"Technologies: PHP, BOOTSTRAP, GIT, MYSQL",
  //  link:"thecho.netlify.app",
   image:Proj4
    },
    {
      id: "num2",
      title: "Food Ordering website",
      content: "In this project, I built a front end part of a Food ordering website.",
technologies:"Technologies:HTML,GIT,CSS,JAVASCRIPT",
      image: Proj1,
      link:"https://thecho.netlify.app"
    },
    {
      id: "num1",
      title: "Landing Page",
      content: "In this project, I built a simple Landing page.",
      technologies:"Technologies: HTML,GIT,CSS",
      image: Proj3,
      link:"https://macarthur-yaw.github.io/HOUSEplug.io/"
    },
    
  ];

  const getDates = myWorks.map((key) => {
    return (
      <div className={key.id}>
      
        <div>
          <img src={key.image} alt="" width="200px" height="150px" />
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
    );
  });

  return(<>
  
  <h1 style={{textAlign:"center"}}>PROJECTS</h1>
   <div>{getDates}</div>
<div className="footer">
  <Footer/>
  </div></>

  );
};

export default Project;
