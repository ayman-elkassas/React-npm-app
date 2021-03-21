import React, { Component } from "react";
import Stateless from './stateless';
import Item from './item';
import Form from './form';
import ComponentLifeCycle from './c-lifeCycle';

class Child extends Component {
  state = {
    items:[
        {id:1,name:"ahmed",age:25},
        {id:2,name:"ayman",age:25},
        {id:3,name:"ali",age:25},
        {id:4,name:"ibrahim",age:25},
    ],
    name: "Ayman",
    age: 25,
    title:"Stateless Component is a functional component that does not contain state"
  };

  handleClick = () => console.log(this.state.name);

  Content = () => {
    return "Child Component Function " + this.state.name +"and age : "+this.state.age;
  };

  change = () => {
      this.setState({
          name:"Mohamed",
          age:19,
      })
  };

  addItem=()=>{
      let {items}=this.state
      items.push({id:1,name:"change",age:25})
      //if variable the same name of state field only put one (items:items) 
      this.setState({
          items
      })
  }

  render() {
    return (
      <div>
        {this.Content()}
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.change}>Change</button>
        <button onClick={this.addItem}>Add</button>
        <button>Delete</button>
        <Stateless title={this.state.title}/>
        <Item items={this.state.items}/>
        <Form/>
        <ComponentLifeCycle/>
      </div>
    );
  }
}

export default Child;
