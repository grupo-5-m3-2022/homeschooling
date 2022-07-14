import { useParams, useHistory } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri"
import { DashboardContainer } from "../Dashboard/styles";
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
    const { subject, bimester: bimesterParam } = useParams()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <DashboardContainer>
            {            
                <SideBar preset={user?.position}/>
            }
            <div className="dashboard-content">
                <Header/>
                <main>
                    <BimesterContent>
                        <div className="bimester-title">
                            <h2>{user?.ano}</h2>
                            <h3>Bem vindo, {user?.name}!</h3>
                        </div>
                        <div className="bimester-navegation">
                            <button onClick={() => {setSelected("aulas"); history.push("/dashboard")}}>
                                <RiArrowLeftSLine />
                                Voltar
                            </button>
                            <button onClick={() => {setSelected("aulas"); history.push("/dashboard")}}>{subject}</button>
                            <button>Bimestre {bimesterParam}</button>
                        </div>

                        <div className="bimester-content">
                            <ul>
                                {
                                    material.map(({ano, bimesters}) => {
                                        if (ano === user?.ano) {
                                            return bimesters.map(({bimester, subejects}) => {
                                                if (bimester === Number(bimesterParam)) {
                                                    return subejects[0][subject[0].toUpperCase() + subject.slice(1)].map((lessons, index) => (
                                                        <li key={index} className="bimester-info">
                                                            <div onClick={() => history.push(`/dashboard/${subject}/${bimester}/${index}`)}>
                                                                <GrDocumentText />
                                                                <h3>{lessons.title.split(' ').length > 8 ? lessons.title.split(' ').slice(0, 8).join(' ') + '...' : lessons.title}</h3>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                                return null
                                            })

                                        }
                                        return null
                                    }) 
                                }
                            </ul>
                        </div>
                    </BimesterContent>
                </main>
            </div>
       </DashboardContainer>
    )
}