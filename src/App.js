import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import P from './components/Props' ;
class App extends Component{
  render(){
  return (
    <div className="App">
      <P  name="navya" fav="rose"/>
    </div>
  );
}
}
export default App;
