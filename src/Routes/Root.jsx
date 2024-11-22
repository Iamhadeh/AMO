
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
            <h2 className="propositon">I help businesses to do three main things:</h2>
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
                         I started writing for business owners who are the point where they can't do everything alone anymore. 
                         My responsibillity is to capture their business objectives and tell people in a way that's interesting. 
                         Gradually, I began to understand that content is more than writing. It's more than what's on the page. 
                         There <span className="red-color">psychology </span> behind it. I needed to do more to get the kind of results this businesses need. 
                         I started studying somethign called copywriting and storytelling. 
                         I study the best people who have had success with selling with words. Notably I fell in love with the <span className="red-color"> Boron Letters</span> and <span className="red-color">Joseph Sugarman's Copy Ad book.</span> I began to see the bigger picture and the role of technology.
                        </p>

                        <p>People create content online, but there are tools, systems, and techonologies that makes it possible for the content to go wide or viral. One of these system <span className="red-color">search engine optimization</span>. It fascinates me becuase it's more in your control, gives you room to be a lot more flexible, and the investment is simple compare to the long-term reward. 
                            With SEO, you can do the work for just one year and keep getting sales or reward for as long your website is online. Social media won't let you do that. If you stop creating on Instagram or Tiktok, your growth or analytic drops compare to the rate it would be if you did SEO well on your website. 
                            So, I became an SEO person. It took a year, working with agencies as a staff, learning, building my own website and freelancing to get the kind of knowledge that makes me say, I understand this enoough.</p> 
                            <p>But there is more to SEO. You have to understand <span className="red-color">psychology, search algorithm</span>, and <span className="red-color">how website works</span>. I tinkered with all areas of SEO for years and got hands on experience while at it. But I wanted to know and do more. Therefore, I started to learn <span className="red-color">Web Development</span> </p>
                            <p>Please, check my <span className="red-color">portfolio page</span>  for more information on how I can help or what I can do for your business. Use the contact button below to reach me or you can click on any of the social media icons on the footer. Thank you.</p>
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
                  <p>I work on the business that want to grow. I snicerely believe that every business should be actively growing. If not they, are dying</p>
                  <button className="chatBtn"> <a href="mailto:princeadewrites@gmail.com">LET'S CHAT...</a></button>
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