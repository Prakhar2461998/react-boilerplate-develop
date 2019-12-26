import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/app/header/header';
import Drawer from '../../components/app/drawer/Index';
import BasicInfoForm from '../../components/Form/BasicInfoForm';
import EmployeeForm from '../../components/Form/EmployeeForm';
import {ProtectedRoute} from '../../routes/ProtectedRoute'
import Info from '../../components/Form/Info';
//import EmployeeInfo from '../../components/Form/EmployeeInfo';
class FormIndex extends Component {
    render() {
        return (
                <div className="dashboard-content-container">
                    <Switch>
                        <Route exact path="/form" component={BasicInfoForm} />
                        <Route path="/form/BasicInfoForm" component={BasicInfoForm} />
                        
                        <Route path="/form/Info"  component={Info} />
                        
                        <ProtectedRoute path='/form/EmployeeForm' component={EmployeeForm}/>
                        
                    
                        </Switch>
                </div>
        )
    }
}
function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    const {auth} = state.LoginReducer;
    return {toggleStatus,auth}
}

export default withRouter(connect(mapStateToProps)(FormIndex));