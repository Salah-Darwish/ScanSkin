
import { useRef,useEffect } from "react";
export function useUpadateEffect(callback,dependences){
     const isIntialMount=useRef(true); 
useEffect(()=>{
    if(isIntialMount.current){
        isIntialMount.current=false; 
    }
    else{
        callback(); 
    }
},dependences);
}