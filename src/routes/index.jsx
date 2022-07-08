import { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import SignUp from "../pages/Signup"
import Dashboard from "../pages/dashboard"
import Login from "../pages/Login"
import Bimester from "../components/Bimester"
import { createContext, useContext} from "react"

const DashboardStatesContext = createContext({})

export function useDashboardStates() {
    return (
        useContext(DashboardStatesContext)
    )
}

export default function Routes() {
    const [selected, setSelected] = useState("aulas");
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <Switch>
            <DashboardStatesContext.Provider value={{selected, setSelected, showSideBar, setShowSideBar}}>
                <Route component={Login} exact path={'/'}/>
                <Route component={SignUp} exact path={'/signup'}/>
                <Route component={Dashboard} exact path={'/dashboard'}/>
                <Route component={Bimester} exact path={'/dashboard/:subject'}/>
                {/* <Route component={Notfound} exact path={'/404'}/>
                <Redirect to="/404"/> */}
            </DashboardStatesContext.Provider>
        </Switch>
    )
}