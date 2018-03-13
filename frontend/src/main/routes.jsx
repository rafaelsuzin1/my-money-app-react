import React from 'react'
import {Router, Route, IndexRoute,  Redirect, hashHistory} from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import DashboardNoRedux from '../dashboardNoRedux/dashboardNoRedux'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DashboardNoRedux} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)