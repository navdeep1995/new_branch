import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <>
            <h1>Form </h1>
            <form>
                <label>Username</label><br/>
                <input type='text' placeholder = 'Enter username here' 
                onChange = {event => this.props.onChange(event.target.value , 'username')}/><br/><br/>
    
                <label>Email</label><br/>
                <input type='email' placeholder = 'Enter Email here' 
                onChange = {event => this.props.onChange(event.target.value ,'email')}/><br/><br/>
    
                <label>Password</label><br/>
                <input type='password' placeholder = 'Enter password here' 
                onChange = {event => this.props.onChange(event.target.value ,'password')}/><br/><br/>
                <label>Confirm Password</label><br/>
                <input type='password' placeholder = 'Confirm password here' 
                onChange = {event => this.props.onChange(event.target.value ,'confirmpassword')}/><br/><br/>
            </form>
            <p>
            Name := {this.props.name} <br/>
            Email := {this.props.email}<br/>
            Password := {this.props.password}<br/>
            </p>
            </>
        )
    }
          
    }   

export default Form;