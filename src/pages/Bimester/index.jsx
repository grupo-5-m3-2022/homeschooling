import { useParams, useHistory } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri"
import { DashboardContainer } from "../dashboard/styles";
import { BimesterContent } from "./styles";
import { GrDocumentText } from "react-icons/gr"
import material from "../../services/material";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { useDashboardStates, useUserStates, useAnimationStates } from "../../components/Providers";
import { useEffect } from "react";

export default function Bimester() {
    const history = useHistory()
    const { setSelected } = useDashboardStates()
    const { verifyUser, user } = useUserStates()
    const { subject, bimester } = useParams()
    const { setLessonsAnimation } = useAnimationStates()

    useEffect(() => {
        async function asyncVerifyUser() {
            let res = await verifyUser()
            if(!res) {
                history.push("/")
            }
            setLessonsAnimation("back")
        }

        asyncVerifyUser()
    })


    return (
        <DashboardContainer>
            {            
                <SideBar preset={user.position}/>
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