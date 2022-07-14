import { DashboardContainer } from "../Dashboard/styles";
import { useUserStates } from "../../components/Providers";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function NotFound() {
    const { user, verifyUser } = useUserStates()
    const history = useHistory()

    useEffect(() => {        
        verifyUser()
    })

    return (
        <DashboardContainer>
            <SideBar preset={user?.position}/>
            <div className="dashboard-content">
                {
                    user?.logged && <Header/>
                }
                <main className="notfound">
                    <h1>Conteúdo não encontrado!</h1>
                    {
                        user?.logged ? 
                            <button onClick={() => history.push("/dashboard")}>Voltar ao dashboard</button> :
                            <button onClick={() => history.push("/")}>Voltar ao login</button>
                    }
                </main>
            </div>

        </DashboardContainer>
    )
}