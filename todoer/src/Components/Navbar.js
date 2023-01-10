import "./navbar.css"
function Navbar(){
    return(
        <header>
            <nav class = "nav">
                <img class = "image1" src  = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
                <ul class = "nav-items">
                    <li><a href ="">Home</a></li>
                    <li><a href ="">About</a></li>
                    <li><a href ="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
