import React, { useEffect, useState } from "react";

const handleStop = "Tempo esgotado!"

const HandleTimeLeft = () => {
    const [timeLeft, setTimeLeft] = useState(10)
        useEffect(()=>{
            setTimeout(()=>{
                setTimeLeft(timeLeft > 0 ? timeLeft - 1 : timeLeft)
            },1000)
        },[timeLeft])
    if (timeLeft === 0) {
        console.log("Handle stop");
    }                      
    return <h1>{timeLeft > 0 ? timeLeft : handleStop}</h1>
}

const OnlineStudent = () => {
    const name = "Aluno"
    return <div>{name} - <HandleTimeLeft/></div>
}

export default OnlineStudent