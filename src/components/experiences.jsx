

function Experiences (props) {
    return (
        <div className="main-exp-box"> 
           <h3 className="project-title" >{props.heading}</h3>
           <p>{props.duration}</p>
           {/* <li>{props.res[1]}</li>
           <li>{props.res[0]}</li> */}
        </div>
     )
}

export default Experiences;