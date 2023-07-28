import React, { useEffect, useState } from "react";

function calculateTimeLeft() {
    return 1
}

export default () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(()=>{
            setTimeLeft(timeLeft => timeLeft + 1)
        })
    });      

    return <div>
        <h1>{timeLeft}</h1>
    </div>
}