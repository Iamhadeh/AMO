

function Techstack (props) {
    return (
        <div className="techDiv">
            <img className="stack-svg" src={props.img} alt="" />
            <p>{props.techstack}</p>  
        </div>
    )
    
}

export default Techstack;