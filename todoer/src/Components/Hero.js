import Card from "./Card.js"
import "./Hero.css"
import {datas} from "./testdata/datas.js"
function Hero(){


    return(
        
        <div className = "Hero-box">
          
          {
          /*datas.map((user) =>{
                return( <Card name = {datas[user].name}/> )

          })*/
        }
            {Object.keys(datas).map((key)=>(
                <Card name = {datas[key].name} phrase = {datas[key].phrase} photo = {datas[key].photo} />
            ))}
          
        </div>
    )

}

export default Hero;