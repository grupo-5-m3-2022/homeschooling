import { Switch, Route, Redirect } from "react-router-dom"
import SignUp from "../pages/Signup"
import Dashboard from "../pages/dashboard"
import Login from "../pages/Login"
import Bimester from "../pages/Bimester"
import Article from "../pages/Article"
import Providers from "../components/Providers"

export default function Routes() {

    return (
        <Switch>
            <Providers>
                <Route component={Login} exact path={'/'}/>
                <Route component={SignUp} exact path={'/signup'}/>
                <Route component={Dashboard} exact path={'/dashboard'}/>
                <Route component={Bimester} exact path={'/dashboard/:subject/:bimester'}/>
                <Route component={Article} exact path={'/dashboard/:subject/:bimester/:article'}/>
                {/* <Route component={Notfound} exact path={'/404'}/>
                <Redirect to="/404"/> */}
            </Providers>
        </Switch>
    )
}