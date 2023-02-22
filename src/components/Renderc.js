import React,{Component} from "react";
const names=["navu","navya"]
class P extends Component{
    render(){
        return(names.map(name=> <h1>{name}</h1> ))
    }
}
export default P;
//rendering using class component