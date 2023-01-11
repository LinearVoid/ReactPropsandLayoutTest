
import "./Card.css"
function Card(props){
    return(
        <div className = "Card">
            <h1>{props.name}</h1>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
            <p>Test</p>
            <a></a>
            <button>Like</button>
        </div>
    )

}

export default Card;