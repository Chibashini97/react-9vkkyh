import React,{Component} from 'react'
import './style.css';

class ToDoList extends Component{

  constructor(){
    super()
    this.state ={
      value:[],
      textValue:''
    };
    this.handleAddToDoItem = this.handleAddToDoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteToDoItem = this.handleDeleteToDoItem.bind(this);
  }

  handleChange(event){
    this.setState({
      textValue : event.target.value
    })
  }

  handleAddToDoItem(){
    this.state.value.push(this.state.textValue);
    this.setState(this.state);
  }

  handleDeleteToDoItem(result){
    for(var i=0; i<this.state.value.length;i++){
      if(this.state.value[i] == result  ){
        delete this.state.value[i]
      }
    }

  }
// this.setState({
//   value : this.state.value;
// })

render(){
    return(
    <div>
      <input type='text' placeholder ="Enter the value" onChange={this.handleChange}/>
      <button onClick={this.handleAddToDoItem}>Add Item</button>
      {this.state.value.map((result) => (
        <div>
        <ul>{result}</ul>
        <button onClick={this.handleDeleteToDoItem.bind(this,result)}>Delete</button>
        </div>
    ))}
    </div>
    )
  }
}

export default ToDoList

//extend to delete
//next to every item there should be a delete button