import { useParams, useHistory, useLocation } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri"
import { DashboardContainer } from "../dashboard/styles";
import { useDashboardStates, useUserStates } from "../../components/Providers";
import { ArticleContent } from "./styles";
import { useEffect, useState } from "react";
import material from "../../services/material";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function Article() {
    const history = useHistory()
    const { setSelected } = useDashboardStates()
    const { subject, bimester, article } = useParams()
    const { verifyUser, user } = useUserStates()
    const { search } = useLocation()
    const queryYear = new URLSearchParams(search).get('ano')
    const [selectedMaterial, setSelectedMaterial] = useState({})

    useEffect(() => {
        async function asyncVerifyUser() {
            let res = await verifyUser()
            if(!res) {
                history.push("/")
            }

            if (user.position.toLowerCase() === 'estudante') {
                setSelectedMaterial(material.filter(({ano}) => ano === user?.ano)[0].bimesters[bimester - 1].subejects[0][subject[0].toUpperCase() + subject.slice(1)][article])
            }
            else if (user.position.toLowerCase().includes('professor')) {
                setSelectedMaterial(material.filter(({ano}) => ano === queryYear)[0].bimesters[bimester - 1].subejects[0][subject[0].toUpperCase() + subject.slice(1)][article])
            }
        }

        asyncVerifyUser()
    }, [])

    return (
        <DashboardContainer>
            {            
                <SideBar preset={user.position}/>
            }
            <div className="dashboard-content">
                <Header />
                <main>
                    <ArticleContent>
                        <div className="article-title">
                            <h2>{user?.ano}</h2>
                            <h3>Bem vindo, {user?.name}!</h3>
                        </div>
                        <div className="article-navegation">
                            {
                                user?.position?.toLowerCase() === 'estudante' ?
                                    <button onClick={() => {setSelected("bimestres"); history.push(`/dashboard/${subject}/${bimester}`)}}>
                                        <RiArrowLeftSLine />
                                        Voltar
                                    </button> :
                                user?.position?.toLowerCase().includes('professor') ?
                                    <button onClick={() => {setSelected("aulas"); history.push(`/dashboard`)}}>
                                        <RiArrowLeftSLine />
                                        Voltar
                                    </button> :
                                    null
                            }
                            <button onClick={() => {setSelected("aulas"); history.push("/dashboard")}}>{subject}</button>
                            <button onClick={() => {setSelected("bimestres"); history.push(`/dashboard/${subject}/${bimester}`)}}>Bimestre {bimester}</button>
                            <button>Artigo {Number(article) + 1}</button>
                        </div>
                        <div className="article-content">
                            <h1>{selectedMaterial?.title}</h1>
                            <div>
                                {
                                    selectedMaterial?.content?.split('\n').map((content, index) => (
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