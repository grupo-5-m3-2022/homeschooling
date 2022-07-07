import { Switch, Route, Redirect } from "react-router-dom"
import SignUp from "../pages/Signup"
import Dashboard from "../pages/dashboard"

export default function Routes() {
    return (
        <Switch>
            <Route component={SignUp} exact path={'/signup'}/>
            <Route component={Dashboard} exact path={'/dashboard'}/>
            {/* <Route component={Home} exact path={'/'}/> */}
            {/* <Route component={Notfound} exact path={'/404'}/>
            <Redirect to="/404"/> */}
        </Switch>
    )
}