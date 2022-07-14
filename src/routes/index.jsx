import { Switch, Route, Redirect } from "react-router-dom"
import SignUp from "../pages/Signup"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Bimester from "../pages/Bimester"
import Article from "../pages/Article"
import NotFound from "../pages/NotFound"
import Providers from "../components/Providers"

export default function Routes() {

    return (
        <Providers>
            <Switch>
                <Route component={Login} exact path={'/'}/>
                <Route component={SignUp} exact path={'/signup'}/>
                <Route component={Dashboard} exact path={'/dashboard'}/>
                <Route component={Bimester} exact path={'/dashboard/:subject/:bimester'}/>
                <Route component={Article} exact path={'/dashboard/:subject/:bimester/:article'}/>
                <Route component={NotFound} exact path={'/404'} />
                <Redirect to="/404"/>
            </Switch>
        </Providers>
    )
}