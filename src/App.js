import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from "./pages/login/Login";
import {ROUTES} from "./routes";
import Home from "./pages/home/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={ROUTES.login}
                    component={Login}/>
                <Route
                    exact
                    path={ROUTES.home}
                    component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
