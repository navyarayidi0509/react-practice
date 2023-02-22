import React from "react";
const names=['navya','navu']
function p(){
    const names1= names.map(name=> <h1>{name}</h1> )
    return(
        <div>
           {
           names1
           }
        </div>
    )
}
export default p
//render using functional components