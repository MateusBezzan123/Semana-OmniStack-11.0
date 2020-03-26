import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Resgiter from './pages/Resgiter';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component= { Logon } />
            <Route path="/register" component= { Resgiter } />
            <Route path="/profile" component= { Profile } />
            <Route path="/incidents/new" component= { NewIncidents } />
        </Switch>
        </BrowserRouter>
    )
}