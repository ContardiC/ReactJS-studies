//import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      
      <MyComponent/>
      <Calendar/>
    </div>
  );
}
const CurrendDate = (props) => {
  return(
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
}
class Calendar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrendDate date={Date()}/>
        <Counter/>
      </div>
      
      
    
    )
  }
}
class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>Hello World!</div>
    );
  }
}
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(){
    this.setState(state =>({
      count: state.count + 1
    }));
  }
  decrement(){
    this.setState(gino =>({
      count: gino.count -1
    }));
  }
  reset(){
    this.setState({
      count : 0
    });
  }
  render(){
    return(
      <div>
        <button onClick={this.increment}>Increment!</button>
        <button onClick={this.decrement}>Decrement!</button>
        <button onClick={this.reset}>Reset!</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
  
}

export default App;
