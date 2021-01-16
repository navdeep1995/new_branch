import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : '',
      email :'',
      password :''
    }
    this.validate = this.validate.bind(this);
  }
  validate(data ,type){
    console.log(data, type)
   if(type == 'username'){
    var n = data.charCodeAt(0);
    console.log(n)
    if(n>= 65 && n <= 90){
      this.setState({
        name : data
      })
    }else{

      alert("First letter should be in caps")    }
   }


   if(type == 'email'){
     let a = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data);
    if (a== true){
      this.setState({
        email : data
      })
    }
   }

   if(type== 'password'){
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(data.match(passw)== true){
        this.setState({
          password : data
        })
      }
   }

   if(type == 'confirmpassword'){
     console.log("cpw",data)
   }


  }
  render(){
    <h1>this is {this.state.name}</h1>
    return (
      <Form onChange={this.validate} name = {this.state.name} email = {this.state.email} 
      password = {this.state.password}/>
    )
  }  
}

export default App;
