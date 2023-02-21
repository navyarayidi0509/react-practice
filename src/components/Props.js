import React from "react";
const P= props => {
    
    console.log(props)
    return <h1>hello {props.name} and ur favorite is {props.fav}</h1>

}
export default P;