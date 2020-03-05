import React, {Component}from 'react';

import './App.css';

import Person from'./Person/Person';


class App extends Component() {

  state={
    person:[
      {name:'vijay', age:20},
      {name: 'KT', age:31},
    {name: 'Rhonda', age:35}
  ] }
  switchNameHeadler = ()=>{
    console.log('button is click!' );
    
  }
render(){
  return (
    <div className='App'>
      <h1>hii, This is our first react App</h1>
      <button onClick={this.switchNameHadler}>Click Here !!</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is play a cricket</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
  

  
    </div>

  );
}
}

export default App;
