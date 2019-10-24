import React,{Component} from 'react'

class FormDemo extends Component{

  constructor(props){
    super(props)
    this.state = {
      name : '',
      email : '',
      nameError : '',
      emailError : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      name : event.target.value
    })
  }

  handleSubmit(event){
    const result = this.validate();
    if(result){
     this.setState({nameError:''})
      alert("Name Submitted");
    }
     event.preventDefault();
  }

  validate(){
    let nameError = '';
    if(!this.state.name){
      nameError = "Name cannot be empty";
    }
    if(nameError){
      this.setState({nameError});
      return false;
    }
    return true;
  }

  render(){
    return(
      <form onSumbit={this.handleSubmit}>
        <div>
          Name:<input type="text" name="name" onChange={this.handleChange}/><br/>
          <div style = {{color:'red'}}>{this.state.nameError}</div><br/>
          Email:<input type="text" name="email"/><br/>
          <center><input type="Submit" value="Submit"/></center><br/>
        </div>
      </form>
    )
  }
}

export default FormDemo