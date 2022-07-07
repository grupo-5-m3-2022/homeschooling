import SearchInput from "../SearchField";
import { GrTemplate } from "react-icons/gr";
import { LessonsContentDiv } from "./styles";
import { useHistory } from "react-router-dom";
import material from "../../services/material";
import { useState } from "react";

export default function Lessons() {
    const history = useHistory();
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]
    const [subject, setSubject] = useState(allSubjects[0]);

    return (
        <LessonsContentDiv>
            <div className="lessons-title">
                <h2>8° Ano do Ensino Fundamental</h2>
                <h3>Bem vindo, Tales!</h3>
            </div>
            <SearchInput options={allSubjects.map(subject => ({value: subject, texto: subject}))} optionSetter={setSubject}/>
            <div>
                <ul className="lessons-cardList">
                    {
                        material[0].bimesters.map((bimester, index) => (
                            Object.keys(...bimester.subejects).includes(subject) && <li key={index}>
                                <div className="lessons-card">
                                    <GrTemplate />
                                    <div>
                                        <h3>Bimestre {bimester.bimester}</h3>
                                        <h4>Turma {material[0].ano}°</h4>
                                        <h4>{subject}</h4>
                                    </div>
                                    </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </LessonsContentDiv>
    )
}