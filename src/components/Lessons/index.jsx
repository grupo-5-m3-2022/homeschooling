import SearchInput from "../SearchField";
import { GrTemplate } from "react-icons/gr";
import { LessonsContentDiv } from "./styles";
import { useHistory } from "react-router-dom";
import material from "../../services/material";
import { useState } from "react";
import { useDashboardStates, useUserStates, useAnimationStates } from "../Providers";
import { useEffect } from "react";

export default function Lessons() {
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]
    const history = useHistory();
    const { setSelected } = useDashboardStates()
    const { user } = useUserStates()
    const { lessonsAnimation, setLessonsAnimation } = useAnimationStates()
    const [subject, setSubject] = useState(allSubjects[0]);

    useEffect(() => {
        return () => {
            setSelected(actual => {
                if (actual !== "aulas" && lessonsAnimation === 'back') {
                    setLessonsAnimation('go')
                }    
                return actual
            })
        }
    })

    return (
        <LessonsContentDiv animation={lessonsAnimation}>
            <div className="lessons-title">
                {user.position === 'Estudante' && <h2>{user?.ano}</h2>}
                <h3>Bem vindo, {user?.name?.split(' ').slice(0, 1).join("")}!</h3>
            </div>
            <SearchInput options={allSubjects.map(subject => ({value: subject, texto: subject}))} optionSetter={setSubject}/>
            <div>
                <ul className="lessons-cardList">
                    {
                        material.map(({ano, bimesters}) => {
                            if (ano === user?.ano) {
                                return bimesters.map((bimester, index) => (
                                    Object.keys(...bimester.subejects).includes(subject) && <li key={index}>
                                        <div className="lessons-card" onClick={() => {setSelected("bimestres"); history.push(`/dashboard/${subject}/${bimester.bimester}`)}}>
                                            <GrTemplate />
                                            <div>
                                                <h3>Bimestre {bimester.bimester}</h3>
                                                <h4>{material[0].ano}°</h4>
                                                <h4>{subject}</h4>
                                            </div>
                                            </div>
                                    </li>
                                ))                                
                            }
                            
                            return null
                        })
                    }
                </ul>
            </div>
        </LessonsContentDiv>
    )
}