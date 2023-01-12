
import "./Card.css"
function Card(props){
    return(
        <div className = "Card">
            <h1>{props.name}</h1>
            <img src = {props.photo}></img>
            <p>{props.phrase}</p>
            <a></a>
            <button>Buy</button>
        </div>
    )

}

export default Card;