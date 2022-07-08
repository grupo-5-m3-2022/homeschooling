import { Switch, Route, Redirect } from "react-router-dom"
import SignUp from "../pages/Signup"
import Dashboard from "../pages/dashboard"
import Login from "../pages/Login"
import Grade from "../pages/Grade"

export default function Routes() {
    return (
        <Switch>
            <Route component={Login} exact path={'/'}/>
            <Route component={SignUp} exact path={'/signup'}/>
            <Route component={Dashboard} exact path={'/dashboard'}/>
            <Route component={Grade} exact path={'/grade'}/>
            {/* <Route component={Notfound} exact path={'/404'}/>
            <Redirect to="/404"/> */}
        </Switch>
    )
}