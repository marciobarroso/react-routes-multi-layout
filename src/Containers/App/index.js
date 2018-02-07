import React from 'react'
import { Switch } from 'react-router-dom'

import RouteLayout from '../../Commons/Routes/RouteLayout'
import Clean from '../../Commons/Layouts/Clean'
import Main from '../../Commons/Layouts/Main'

const App = () => {
    return (
        <Switch>
            <RouteLayout exact path='/' layout={Clean} component={() => <div>home</div>} />
            <RouteLayout exact path='/user/settings' layout={Main} render={() => <div>User Settings</div>} />
            <RouteLayout exact path='/user/profile' layout={Main} render={() => <div>User Profile</div>} />
        </Switch>
    )
}

export default App