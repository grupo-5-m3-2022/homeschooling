import { useParams, useHistory } from "react-router-dom";
import { FiClipboard, FiSettings } from "react-icons/fi";
import { HiCubeTransparent } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowLeftSLine } from "react-icons/ri"
import { DashboardContainer } from "../dashboard/styles";
import material from "../../services/material";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { useDashboardStates } from "../../routes";
import { ArticleContent } from "./styles";

export default function Article() {
    const { setSelected } = useDashboardStates()
    const history = useHistory()
    const { subject, bimester, article } = useParams()
    const selectedMaterial = material[0].bimesters[bimester - 1].subejects[0][subject][article]

    return (
        <DashboardContainer>
            {            
                <SideBar asideFunctions={[
                    ["Painel de controle", [[FiClipboard, 'Aulas'], [HiCubeTransparent, 'Desempenho']]],
                    ["Suporte", [[FiSettings, "Configurações"], [AiOutlineInfoCircle, "Ajuda"]]]
                ]}/>
            }
            <div className="dashboard-content">
                <Header />
                <main>
                    <ArticleContent>
                        <div className="article-title">
                            <h2>8° Ano do Ensino Fundamental</h2>
                            <h3>Bem vindo, Tales!</h3>
                        </div>
                        <div className="article-navegation">
                            <button onClick={() => {setSelected("bimestres"); history.push(`/dashboard/${subject}/${bimester}`)}}>
                                <RiArrowLeftSLine />
                                Voltar
                            </button>
                            <button onClick={() => {setSelected("aulas"); history.push("/dashboard")}}>{subject}</button>
                            <button onClick={() => {setSelected("bimestres"); history.push(`/dashboard/${subject}/${bimester}`)}}>Bimestre {bimester}</button>
                            <button>Artigo {Number(article) + 1}</button>
                        </div>
                        <div className="article-content">
                            <h1>{selectedMaterial.title}</h1>
                            <div>
                                {
                                    selectedMaterial.content.split('\n').map((content, index) => (
                                        <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{content}</p>
                                    ))
                                }
                            </div>

                        </div>
                    </ArticleContent>
                </main>
            </div>

       </DashboardContainer>    )
}