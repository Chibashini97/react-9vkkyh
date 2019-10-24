import React, { Component } from 'react';
export default class NewFile extends Component
{
    constructor(props)
    {
      super(props)
      this.state={name:'',email:'',nameError:'',emailError:''}
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
  handleChange(e)
  {
    this.setState({[e.target.name]:e.target.value});
  }

  handleSubmit(event)
  {
    const result=this.validate();
    if(result)
    {
        this.setState({nameError:'',emailError:''})
        alert("name submitted");
    }
      event.preventDefault();
  }

  validate()
  {
      let nameError='';
      let emailError='';
      if(!this.state.name)
      {
        nameError="name cannot be empty";
      }
      if(!this.state.email.includes("@"))
      {
        emailError="Invalid Email ID";
      }
      if(emailError || nameError )
      {
          this.setState({emailError,nameError})
          return false;
      }
      return true;
  }

  render()
  {
    return(
      <form onSubmit={this.handleSubmit}>
      <div>
        Name:<input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
        <div style={{color:'red'}}> {this.state.nameError} </div>
        <br/>
        email:<input type="text" name="email"/>
        <div style={{color:'red'}}> {this.state.emailError} </div>
        <input type="submit" name="submit"/>
      </div>
      </form>
      
    )

  }
}

         



