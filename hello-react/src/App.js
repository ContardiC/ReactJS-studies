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
  }
  increment(){
    this.setState(state =>({
      count: state.count + 1
    }));
  }
  render(){
    return(
      <div>
        <button onClick={this.increment}>Increment!</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
  
}

export default App;
