
import Project from "../components/projects";
import projectInfo from "../components/projectInfo";
import Experiences from "../components/experiences";
import WDprojectExperience from "../components/WDprojectExperince";
import Techstack from "../components/TechStack.jsx";
import TechstackInfo from "../components/TechStack.js";
import Ham from "../components/Hamburgermenu.jsx";

import { useState } from "react";


function Root () {

const [initialCon, setContact] = useState("hide")


function handlecClick () {
    setContact("story-div")
}

function handlecClose () {
    setContact("hide")
}
    
function createProject (projectInfo) {
    return (
        <Project 
        imgTitle={projectInfo.imgTitle}
        Img={projectInfo.Img}
        projectDescription={projectInfo.projectDescription}
        ImgAlt={projectInfo.ImgAlt}
        projectLink={projectInfo.projectLink}
        />
    )
}

function createExp (WDprojectExperience) {
    return (
        <Experiences
        heading= {WDprojectExperience.heading}
        duration= {WDprojectExperience.duration}  
        />
    )
}


function createTechstack (TechstackInfo) {
    return (
        <Techstack
        techstack= {TechstackInfo.techstack}
        img= {TechstackInfo.img} 
        key={TechstackInfo.id} 
        />
    )
}



    return (
        <>
        <div className="header">
            <img className="headeImg" src="../static/images/Rectangle-2.png" alt="" />
            <menu> 
                <button className="btn">PortFolio</button>
                <button onClick={handlecClick} className="btn">About</button>
                <button className="btn">Contact</button>
            </menu>
            <Ham />
            <h1>Hi, I am <span className="nameId">Adekusibe Ogunmokun</span> </h1>
            <h2 className="propositon">I help business do three main things:</h2>
        </div>

        
        <div className="workChoice">
            <div className="work">
                <button className="software">SOFTWARE DEVELOPMENT</button>
            </div>
            <div className="work">
                <button className="Content">COTENT WRITING</button>
            </div>
            <div className="work">
                <button className="seo">SEARCH ENGINE OPTIMIZATION</button>
            </div>

        </div> 

        <div className="main">
            <img className="profile-Img" src="../static/images/e4sz6s_1.jpg " alt="" />
            <div className="text-area">
                <p></p>
            </div>
        </div>

        <div className="about">
                <div className="aboutContainer">
                    <div className="textBox">
                       <h2 className="proHead" >About Me</h2>
                        <p> I am Adekusibe Ogunmokun. I help business owners to take their business online by providing such services that makes people to patronise them remotely or make it easy for people to find them. 
                            I can create your website and ensure that when people search for what you do, they will land on your page. 
                        </p>
                        <button onClick={handlecClick} className="btnReadMore">Read The Rest Of My Story</button>
                    </div> 
                </div>
            </div>
            <div className={initialCon}>
                <div className="inside-story-div">
                    <img src="" alt="" />

                      <button onClick={handlecClose} className="close">close</button>
                        <h2>My Story</h2>
                        <p>Everyone started from somewhere. I started with writing. I was a student with a passion for writing. When I turned twenty-three in school, still an undergraduate, I realized it was possible to make money from writing.
                            So, the journey began.
                        </p>
                        <p>
                            
                        </p>
                    </div>
            </div>

        <div className="choose">
            <button>SOFTWARE DEVELOPMENT</button>
            <button>SEO</button>
            <button>CONTENT WRITING</button>
        </div>

        <div className="mainBox">
            <div className="container-1">
              <div className="Con">
                  <h2 className="proHead">Projects</h2>
                  {projectInfo.map(createProject)} 
               </div>

               <div className="Con">
                <div className="experinceCon">
                  <h2 className="proHead">Experience</h2>
                  {WDprojectExperience.map(createExp)} 
                </div>
               </div>   

                <div className="SD-TechStark">
                  <h2 className="proHead" >Tech Stack</h2>
                    <div className="techDivCon"> 
                      {TechstackInfo.map(createTechstack)}
                    </div>
                </div>
            </div>
        </div>




            <div className="contact">
                <div className="contact-contact">
                   <h2 className="proHead" >Contact</h2>
                    <ul>
                      <li>Call: 0813-7470-578</li>
                       <li>Email: cusibeade@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="why-work-with-me">
               <div className="contact-container">
                  <h2 className="proHead" > Why Work With Me</h2>
                  <h3 className="h3Excel">Excellence, Integrity, & Growth</h3>
                  <p>I work on the business that want to grow. I snicerely believe that every business shouldbe actively growing. If not they, are dying</p>
                  <button className="chatBtn"><a href=" ">LET'S CHAT...</a></button>
                </div>
            </div>

            <footer>
                <div className="bar">
                   <a href=""><img src="../static/images/static/linkedin.svg" alt="" /></a> 
                   <a href="https://www.linkedin.com/in/adekusibe-ogunmokun-seo-pro/"><img src="../static/images/static/link.svg" alt="" /></a>
                   <a href="x.com/iamhadeh"><img src="../static/images/static/twitter-x.svg" alt="" /></a>
                   <a href="https://www.instagram.com/iamhadeh/"><img src="../static/images/static/instagram.svg" alt="" /></a>
                   <a href="https://github.com/Iamhadeh"><img style={{height: "20px"}} src="../static/images/static/image.png" alt="" /></a>
                </div>
            </footer>       
        </>
    )
}

export default Root;