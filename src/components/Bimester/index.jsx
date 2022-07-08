import { useParams, useLocation, useHistory } from "react-router-dom";
import { FiClipboard, FiSettings } from "react-icons/fi";
import { HiCubeTransparent } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { DashboardContainer } from "../../pages/dashboard/styles";
import material from "../../services/material";
import Header from "../Header";
import SideBar from "../SideBar";

export default function Bimester() {
    const { subject } = useParams()
    const { search } = useLocation()
    const bimester = new URLSearchParams(search).get('bimester')

    return (
        <DashboardContainer>
            {            
                <SideBar asideFunctions={[
                    ["Painel de controle", [[FiClipboard, 'Aulas'], [HiCubeTransparent, 'Desempenho']]],
                    ["Suporte", [[FiSettings, "Configurações"], [AiOutlineInfoCircle, "Ajuda"]]]
                ]}/>
            }
            <div className="dashboard-content">
                <Header/>
                <main>
                </main>
            </div>

       </DashboardContainer>
    )
}