
import Project from "../components/projects";
import projectInfo from "../components/projectInfo";
import Experiences from "../components/experiences";
import WDprojectExperience from "../components/WDprojectExperince";
import Techstack from "../components/TechStack.jsx";
import TechstackInfo from "../components/TechStack.js";
import Ham from "../components/Hamburgermenu.jsx";


function Root () {
    
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
        />
    )
}



    return (
        <>
        <div className="header">
            <img className="headeImg" src="../static/images/Rectangle-2.png" alt="" />
            <menu> 
                <button className="btn">PortFolio</button>
                <button className="btn">About</button>
                <button className="btn">Contact</button>
            </menu>
            <Ham />
            <h1>Hi, I am <span className="nameId">Adekusibe Ogunmokun</span> </h1>
            <h2 className="propositon">There are three major things I help business do:</h2>
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
                  <h2 className="proHead">Experience</h2>
               {WDprojectExperience.map(createExp)} 

               </div>   

                <div className="SD-TechStark">
                  <h2 className="proHead" >Tech Stack</h2>
                    <div className="techDivCon"> 
                      {TechstackInfo.map(createTechstack)}
                    </div>
                </div>

            </div>


        </div>



            <div className="about">
                <div className="aboutContainer">
                   <div className="myImg"><img src="" alt="" /></div>
                    <div className="textBox">
                       <h2 className="proHead" >About Me</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                     </div>
                </div>
            </div>

            <div className="contact">
                <div className="contact-container">
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
                  <h3>Excellence, Integrity, & Growth</h3>
                  <p>I work on the business that want grow. I snicerely believe that every business shouldbe actively growing. If not they, are dying</p>
                  <button className=""><a href=" ">LET'S CHAT...</a></button>
                </div>
            </div>

            <footer>
                <div className="bar">
                   <a href=""><img src="" alt="" /></a> 
                   <a href=""><img src="" alt="" /></a>
                   <a href=""><img src="" alt="" /></a>
                   <a href=""><img src="" alt="" /></a>
                </div>
            </footer>       
        </>
    )
}

export default Root;