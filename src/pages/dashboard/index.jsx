import { useState } from "react"
import { FiSettings, FiClipboard } from "react-icons/fi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { HiCubeTransparent } from "react-icons/hi"
import { DashboardContainer } from "./styles"
import SideBar from "../../components/SideBar"
import Lessons from "../../components/Lessons"
import Performance from "../../components/Performance"
import Help from "../../components/Help"
import Settings from "../../components/Settings"
import Header from "../../components/Header"

export default function Dashboard() {
    const [selected, setSelected] = useState("aulas");
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <DashboardContainer>
            {            
                <SideBar asideFunctions={[
                    ["Painel de controle", [[FiClipboard, 'Aulas'], [HiCubeTransparent, 'Desempenho']]],
                    ["Suporte", [[FiSettings, "Configurações"], [AiOutlineInfoCircle, "Ajuda"]]]
                ]} open={selected} setOpen={setSelected} show={showSideBar} setShow={setShowSideBar}/>
            }
            <div className="dashboard-content">
                <Header setShowSideBar={setShowSideBar}/>
                <main>
                    {
                        selected === 'aulas' ?
                            <Lessons /> :
                        selected === 'desempenho' ?
                            <Performance /> :
                        selected === 'configurações' ?
                            <Settings /> :
                        selected === 'ajuda' ?
                            <Help /> :
                            null
                    }                    
                </main>
            </div>

       </DashboardContainer>
    );
}