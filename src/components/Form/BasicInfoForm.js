import React, { Component } from 'react'

export default class BasicInfoForm extends Component {
  render() {
    return (
      <div>
      <form>
      <h2>Enter your details</h2>
      
      <label>Name:</label>
      <input type="text"/>  

      <label>Salary:</label> 
      <input type="text"></input>



      <label>Age:</label>
      <input type="text" />
       
     
       <button> ADD</button>
       </form>
      </div>
    )
  }
}
