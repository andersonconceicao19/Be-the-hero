import React from 'react';
import{ BrowserRouter, Switch, Route} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/register'
import Profile from './pages/Profile'
import NewIncident from './pages/newincident';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/incidents/news" exact component={NewIncident} />

        </Switch>
    </BrowserRouter>
    )
}
