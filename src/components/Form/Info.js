import React, { Component } from 'react'
// import { getData } from '../../actions/index'
// import { connect } from 'react-redux';

 class Info extends Component {
    
   constructor(props)
   {

    super(props)
    this.state={
          info:[]
    }
   }


    componentDidMount()
    {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res =>res.json())
        .then(data => this.setState({info: data}));
    }
    // componentWillMount()
    // {
    //     this.props.getData();
    // }
    
    
    render() {
            
const infoList=this.state.info.map(details =>(
    <div key ={details.id}>
    
    <h2>NAME : {details.employee_name}</h2>
           
           
    <p>Salary: {details.employee_salary}</p>
    
       <p>Age: {details.employee_age} </p>

       <button >DELETE</button>
    
    </div>

    
))

         return (
            <div>
                  <h1>Enter the details</h1>
                  <form>
                  <label>Name:</label>
                  <input type="text" />
                  <label>Salary:</label>
                  <input type="text" />
                  <label>Age:</label>
                  <input type="text"></input>
                  <button>Add</button>
            
                    

            </form>
              <br />
                     <h2>Details of the Employee</h2>
               {infoList}
            </div>
        )
    }
}
export default Info;
