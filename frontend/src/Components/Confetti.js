import React, {useState,useEffect} from "react";
import ReactConfetti from "react-confetti";
const Confetti = () => {
    const[windowDim,setWindowDim]=useState({width:window.innerWidth,height:window.innerHeight});
   
    const detectSize=()=>{
        setWindowDim({width:window.innerWidth,height:window.innerHeight});
    }

    useEffect(()=>{
        window.addEventListener('resize',detectSize)
        return ()=>{
            window.removeEventListener('resize',detectSize)
        }
    },[windowDim]);
    return(
        <>
            <ReactConfetti 
            width={windowDim.width}
            height={windowDim.height}
            tweenDuration={1000}
            />
        </>
    )
}
export default Confetti;