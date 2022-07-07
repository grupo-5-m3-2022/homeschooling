import { Switch, Route } from "react-router-dom"
import SignUp from "../pages/Signup"

export default function Routes() {
    return (
        <Switch>
            <Route component={SignUp} exact path={'/signup'}/>
        </Switch>
    )
}