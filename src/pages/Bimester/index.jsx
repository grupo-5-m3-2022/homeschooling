import { useParams, useLocation, useHistory } from "react-router-dom";
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
                    <BimesterContent>
                        <div className="bimester-title">
                            <h2>8° Ano do Ensino Fundamental</h2>
                            <h3>Bem vindo, Tales!</h3>
                            </div>
                        <div className="bimester-navegation">
                            <button>
                                <RiArrowLeftSLine />
                                Voltar
                            </button>
                            <button>{subject}</button>
                            <button>Bimestre {bimester}</button>
                        </div>

                        <div className="bimester-content">
                            <ul>
                                {
                                    material[0].bimesters.map(bimesterMaterial => (
                                        bimesterMaterial.bimester === Number(bimester) ? 
                                            bimesterMaterial.subejects[0][subject].map((lessons, index) => (
                                                <li key={index}>
                                                    <div>
                                                        <GrDocumentText />
                                                        <h3>{lessons.title}</h3>
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