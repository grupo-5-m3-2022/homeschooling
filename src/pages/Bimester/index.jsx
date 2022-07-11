import { useParams, useHistory } from "react-router-dom";
import { FiClipboard, FiSettings } from "react-icons/fi";
import { HiCubeTransparent } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri"
import { DashboardContainer } from "../dashboard/styles";
import { BimesterContent } from "./styles";
import { GrDocumentText } from "react-icons/gr"
import material from "../../services/material";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { useDashboardStates } from "../../routes";

export default function Bimester() {
    const { setSelected } = useDashboardStates()
    const history = useHistory()
    const { subject, bimester } = useParams()

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
                    <BimesterContent>
                        <div className="bimester-title">
                            <h2>8° Ano do Ensino Fundamental</h2>
                            <h3>Bem vindo, Tales!</h3>
                        </div>
                        <div className="bimester-navegation">
                            <button onClick={() => {setSelected("aulas"); history.push("/dashboard")}}>
                                <RiArrowLeftSLine />
                                Voltar
                            </button>
                            <button onClick={() => {setSelected("aulas"); history.push("/dashboard")}}>{subject}</button>
                            <button>Bimestre {bimester}</button>
                        </div>

                        <div className="bimester-content">
                            <ul>
                                {
                                    material[0].bimesters.map(bimesterMaterial => (
                                        bimesterMaterial.bimester === Number(bimester) ? 
                                            bimesterMaterial.subejects[0][subject].map((lessons, index) => (
                                                <li key={index}>
                                                    <div onClick={() => history.push(`/dashboard/${subject}/${bimester}/${index}`)}>
                                                        <GrDocumentText />
                                                        <h3>{lessons.title.split(' ').length > 8 ? lessons.title.split(' ').slice(0, 8).join(' ') + '...' : lessons.title}</h3>
                                                    </div>
                                                </li>
                                            )) : 
                                            null 
                                    ))
                                }
                            </ul>
                        </div>
                    </BimesterContent>
                </main>
            </div>

       </DashboardContainer>
    )
}