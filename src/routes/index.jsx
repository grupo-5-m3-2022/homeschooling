import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from "../pages/dashboard"

export default function Routes() {
    return (
        <Switch>
            {/* <Route component={Home} exact path={'/'}/> */}
            <Route component={Dashboard} exact path={'/dashboard'}/>
            {/* <Route component={Notfound} exact path={'/404'}/>
            <Redirect to="/404"/> */}
        </Switch>
    )
}