import main from './images/main.png'
import './Home.css'
function Home(){
    return(
        <center className="main-home">
            <img src={main} style={{marginTop:"10%"}}></img>
            <br/>
            <button className="main-button" onClick={()=>{window.location.href="/signup"}}>SIGNUP</button>
            <br/>
            <button className="main-button" onClick={()=>{window.location.href="/login"}}>LOGIN</button>
        </center>
    )
}

export default Home;