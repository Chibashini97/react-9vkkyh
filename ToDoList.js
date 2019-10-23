import React,{Component} from 'react'

class ToDoList extends Component{

  constructor(){
    super()
    this.state ={
      value:['item1','item2','item3'],
      textValue:''
    };
    this.handleAddToDoItem = this.handleAddToDoItem.bind(this);
    this.handleDeleteToDoItem = this.handleDeleteToDoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleDeleteToDoItem(){
    this.state.value.splice(this.state.value.indexOf(this.state.value),1);
    this.setState(this.state);
  }

  render(){
    return(
    <div>
      <input type='text' placeholder ="Enter the value" onChange={this.handleChange}/>
      <button onClick={this.handleAddToDoItem}>Add Item</button>
      <button onClick={this.handleDeleteToDoItem}>Delete Item</button>
      <p>{this.state.value}</p>
    </div>
    )
  }
}

export default ToDoList

//extend to delete
//next to every item there should be a delete button