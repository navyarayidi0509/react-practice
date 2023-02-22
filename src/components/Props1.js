import React,{Component} from "react";
class P extends Component{
    render(){
    return (
        <h1>hello {this.props.name} and ur favorite is {this.props.fav}</h1>
    )
    }
}
export default P;
// props using class components