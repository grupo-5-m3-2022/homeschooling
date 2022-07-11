import { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import SignUp from "../pages/Signup"
import Dashboard from "../pages/dashboard"
import Login from "../pages/Login"
import Bimester from "../pages/Bimester"
import Article from "../pages/Article"
import { createContext, useContext} from "react"

const DashboardStatesContext = createContext({})
const SiteUserStatesContext = createContext({})

export function useUserStates() {
    return (
        useContext(SiteUserStatesContext)
    )
}

export function useDashboardStates() {
    return (
        useContext(DashboardStatesContext)
    )
}

export default function Routes() {
    const [selected, setSelected] = useState("aulas");
    const [showSideBar, setShowSideBar] = useState(false)
    const [user, setUser] = useState({})

    return (
        <Switch>
            <SiteUserStatesContext.Provider value={{user, setUser}}>
                <DashboardStatesContext.Provider value={{selected, setSelected, showSideBar, setShowSideBar}}>
                <Route component={Login} exact path={'/'}/>
                <Route component={SignUp} exact path={'/signup'}/>
                <Route component={Dashboard} exact path={'/dashboard'}/>
                <Route component={Bimester} exact path={'/dashboard/:subject/:bimester'}/>
                <Route component={Article} exact path={'/dashboard/:subject/:bimester/:article'}/>
                {/* <Route component={Notfound} exact path={'/404'}/>
                <Redirect to="/404"/> */}
                </DashboardStatesContext.Provider>
            </SiteUserStatesContext.Provider>
        </Switch>
    )
}