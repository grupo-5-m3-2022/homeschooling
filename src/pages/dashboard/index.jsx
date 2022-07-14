import { DashboardContainer } from "./styles"
import SideBar from "../../components/SideBar"
import Lessons from "../../components/Lessons"
import Grade from "../../components/Grade"
import Help from "../../components/Help"
import Settings from "../../components/Settings"
import Studants from "../../components/Studants"
import Header from "../../components/Header"
import { useDashboardStates, useUserStates } from "../../components/Providers"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"


export default function Dashboard() {
    const { selected } = useDashboardStates()
    const { user, verifyUser } = useUserStates()
    const history = useHistory()


    useEffect(() => {
        async function asyncVerifyUser() {
            let res = await verifyUser()
            if(!res) {
                history.push("/")
            }
        }

        asyncVerifyUser()
    })

    return (
        user?.logged && <DashboardContainer>
            <SideBar preset={user.position}/>
            <div className="dashboard-content">
                <Header/>
                <main>
                    {
                        selected === 'aulas' ?
                            <Lessons /> :
                        selected === 'desempenho' ?
                            <Grade /> :
                        selected === 'configurações' ?
                            <Settings /> :
                        selected === 'ajuda' ?
                            <Help /> :
                        selected === 'alunos' ?
                            <Studants /> :
                        null
                    }
                </main>
            </div>

       </DashboardContainer>
    );
}