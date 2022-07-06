import { useState } from "react"
import { FiSettings, FiClipboard } from "react-icons/fi"
import { AiOutlineInfoCircle, AiOutlineUser } from "react-icons/ai"
import { HiCubeTransparent } from "react-icons/hi"
import { BiLoaderCircle, BiBell } from "react-icons/bi"
import { DashboardContainer, DashboardAside, DashboardFunction, DashboardHeader } from "./styles"
import SearchInput from "../../components/SearchField"
import Lessons from "../../components/Lessons"
import Performance from "../../components/Performance"
import Help from "../../components/Help"
import Settings from "../../components/Settingsg"

export default function Dashboard() {
    const [selected, setSelected] = useState("aulas");

    return (
        <DashboardContainer>
            {            
                <DashboardAside>
                <div className="aside-title">
                    <BiLoaderCircle />
                    <h1>Home School</h1>
                </div>
                <nav className="aside-functions">
                    <ul>
                        <li>
                            <small>PAINEL DE CONTROLE</small>
                        </li>
                        <li>
                            <DashboardFunction onClick={() => {setSelected("aulas")}} selected={selected === "aulas"}>
                                <FiClipboard />
                                Aulas
                            </DashboardFunction>
                        </li>
                        <li>
                            <DashboardFunction onClick={() => {setSelected("desempenho")}} selected={selected === "desempenho"}>
                                <HiCubeTransparent />
                                Desempenho
                            </DashboardFunction>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <small>SUPORTE</small>
                        </li>
                        <li>
                            <DashboardFunction onClick={() => {setSelected("configuracoes")}} selected={selected === "configuracoes"}>
                                <FiSettings />
                                Configurações                                
                            </DashboardFunction>    
                        </li>
                        <li>
                            <DashboardFunction onClick={() => {setSelected("ajuda")}} selected={selected === "ajuda"}>
                                <AiOutlineInfoCircle />
                                Ajuda                                
                            </DashboardFunction>
                        </li>
                    </ul>
                </nav>
                </DashboardAside>
            }

            <div className="dashboard-content">
                <DashboardHeader>
                    <SearchInput placeholder="Pesquisar..."/>
                    <div className="header-container">
                        <BiBell />
                        <div className="header-user">
                            <AiOutlineUser />
                            <div>
                                <h3>Example Name</h3>
                                <h4>Example Role</h4>
                            </div>
                        </div>
                    </div>
                </DashboardHeader>

                <main>
                    {
                        selected === 'aulas' ?
                            <Lessons /> :
                        selected === 'desempenho' ?
                            <Performance /> :
                        selected === 'configuracoes' ?
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