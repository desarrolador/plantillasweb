import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import SiteEditor from './components/SiteEditor';

function App() {
    const [token, setToken] = useState(null);

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login setAuth={setToken} />
                </Route>
                <Route path="/register" component={Register} />
                <Route path="/edit/:id">
                    <SiteEditor token={token} />
                </Route>
                <Route path="/">
                    <Dashboard token={token} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
