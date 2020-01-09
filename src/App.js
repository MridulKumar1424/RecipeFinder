import React from 'react';
import axios from 'axios';
import './App.css';
import './Components/display.css';
import Display from './Components/display'
import Form from './Components/form'

class App extends React.Component{
  state ={
    ingredients:[],
    status:null
  }
  generateApi=(name)=>{
    this.setState(
      { status:"loading"}
    )
   axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+name)
   .then(res=>{
     console.log(res)
     if(res.data.meals===null)
     {
      this.setState(
        { status:"notFound"}
      )
     }
     else{
    this.setState(
      {
        ingredients:res.data.meals,
        status:null
      }
    )
     }
   }
   )
  
  }
  render(){
    return (
    <div className="App">
     <Form generateApi={this.generateApi}/>
     {this.state.status==="loading"&&<div id ="noDisplay">Loading</div>}
     {this.state.status==="notFound"&&<div id ="notFound">No Data has been Found</div>}
     {this.state.status===null&&<Display  ingredients={this.state.ingredients } />}
    </div>
  
   );
 }
}

export default App;
