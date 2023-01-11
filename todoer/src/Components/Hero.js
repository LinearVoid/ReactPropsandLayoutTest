import Card from "./Card.js"
import "./Hero.css"
function Hero(){
    const datas =[
        {
            name:"Bob"
            

        },
        {
            name:"Jack"
            

        },
        {
            name:"Dave"
            

        },
        {
            name:"sally"
            

        }

    ]

    return(
        
        <div className = "Hero-box">
            {datas.map((dude) =>(
                <Card name = {datas[dude].name}/>

            ))
            
            }

            <Card name = "Yeet"/>
            
        </div>
    )

}

export default Hero;