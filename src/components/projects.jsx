

    function openInNewTab(url) {
        window.open(url, '_blank').focus();
      }


function Project (props) { 
    return (
        <div className="SD-portfolio">
            <h3 className="project-title">{props.imgTitle}</h3>
            <img src={props.Img} alt={props.ImgAlt} className="project-img" />
            <p className="project-description">{props.projectDescription}</p>
            <button onClick = {openInNewTab(props.projectLink)} > <a href= {openInNewTab(props.projectLink)}  > Check It Out</a></button>
        </div>
    )

}



export default Project;