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
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
    this.setState({nameError:'',emailError:''})
  }

  handleSubmit(event){
    const result = this.validate();
    if(result){
     alert("Name Submitted");
    }
     event.preventDefault();
  }

  validate(){
    let nameError = '';
    let emailError = '';
    if(!this.state.name){
      nameError = "Name cannot be empty";
    }
    if(!this.state.email.includes("@")){
      emailError = "Invalid Email ID"
    }
    if(nameError||emailError){
      this.setState({nameError,emailError});
      return false;
    }
    return true;
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          Name:<input type="text" name="name" onChange={this.handleChange} value={this.state.name}/><br/>
          <div style = {{color:'red'}}>{this.state.nameError}</div><br/>
          Email:<input type="text" name="email" onChange={this.handleChange} value={this.state.email}/><br/>
          <div style = {{color:'red'}}>{this.state.emailError}</div><br/>
          <center><input type="Submit" name="Submit"/></center><br/>
        </div>
      </form>
    )
  }
}

export default FormDemo