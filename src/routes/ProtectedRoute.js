import { checkAuth } from './Route';
import React from 'react'
import {Redirect, Route} from 'react-router-dom';

/**
 *
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 * ToDo: edit the following details
 * The purpose of this constant is to-
 * check wheather user is logged in or logged out,
 * if logged in - user can visit any routes (eg. /tenants, /users, /hosta)
 */

export const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        return checkAuth() ?
            <Redirect to='/dashboard'/>
            : <Component {...props}/>
    }}/>
);