import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import SignOutButton from "../SignOut";
import SignInPage from '../SignIn';
import AdminPage from '../Admin/AdminPage';


const PortfolioManager = () => {
    const [authUser, setAuthUser] = React.useState();

    return (
        <Router>
            <div>
                <Route path={"/signin"} component={SignInPage}/>
                <Route exact path={"/"} component={AdminPage}/>
            </div>
        </Router>
        );

};

export default PortfolioManager;