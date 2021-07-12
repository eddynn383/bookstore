import React from 'react'
import Signup from '../Signup'
import Dashboard from './Dashboard'
import Login from '../Login'
import PrivateRoute from '../PrivateRoute'
import ForgotPassword from '../ForgotPassword'
import UpdateProfile from '../UpdateProfile'

import { Container } from 'react-bootstrap'
 

import { Switch, Route } from 'react-router-dom'

export default function Content() {
    return (
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
        </Container>
    )
}
