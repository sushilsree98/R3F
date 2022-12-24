import { useRef } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Clicker = ({keyName, increment}) => {
    const [count, setCounter] = useState(0)
    const shouldLoad = useRef(true)
    useEffect(()=>{
        if(shouldLoad.current){
            shouldLoad.current = false;
        }
    },[])
    
    const checkerCount = () =>{
        console.log("Clicker called!!")
    }
    const checker = useMemo(()=>checkerCount(),[count])

    const buttonClicked = ()=>{
        setCounter((prev)=> prev + 1)
        increment()
    }

    return(
        <>
            <p>Clicker count : {count}</p>
            <button onClick={buttonClicked}>Click here</button>
            {checker}
        </>
    )
}

export default Clicker