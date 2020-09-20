import React from 'react'
import {
Route as SimpleRoute,
//Router,                                                               for now not using history
Switch,
Redirect
} from 'react-router-dom'
import Welcome from '../components/welcome/welcome';
import Skills from '../components/skills/skills'
import Certifications from '../components/certifications/certifications'
//import History from './history'                                       for now not using history
import MainContent from '../components/maincontent/maincontent';
const Routes=()=>{
localStorage.setItem("authToken","acde")
        const Route = ({ component: Component, ...rest }) => (
          <SimpleRoute
            {...rest}
            render={props =>
              //TODO: check redirect on mobile
              localStorage.getItem("authToken") ? (
                <MainContent>
                  <Component {...props} />
                  </MainContent>
              ) : (
                  <Redirect to="/login" />
                )
            }
          />
        );

    return(
        
            <Switch>
                <Route exact path="/" component={Skills}/>
        <Route exact path="/welcome" component={Welcome}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/certs" component={Certifications}/>
        <Route exact path="/gitlnk" component={Skills}/>
        </Switch>
        
    )
}

export default Routes;