import SearchInput from "../SearchField";
import { GrTemplate } from "react-icons/gr";
import { LessonsContentDiv } from "./styles";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDashboardStates, useUserStates, useAnimationStates } from "../Providers";
import { useEffect } from "react";
import { BimesterContent } from "../../pages/Bimester/styles"
import material from "../../services/material";

export default function Lessons() {
    const history = useHistory();
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]

    const { setSelected } = useDashboardStates()
    const { user } = useUserStates()

    const { lessonsAnimation, setLessonsAnimation } = useAnimationStates()
    const [yearProfessor, setYearProfessor] = useState("todos")
    const [subject, setSubject] = useState(allSubjects[0]);
    const [bimesterProfessor, setBimesterProfessor] = useState('todos')
    const [lessonsProfessor, setLessonsProfessor] = useState('todas')
    const [filteredMaterial, setFilteredMaterial] = useState({})

    useEffect(filterYearProfessor, [yearProfessor])
    useEffect(filterSubject, [subject])
    // useEffect(filterBimesterProfessor, [bimesterProfessor])
    // useEffect(filterLessonsProfessor, [lessonsProfessor])

    function filterYearProfessor() {
        const tempMaterial = {}
        tempMaterial.year = material.map(({ano, bimesters}) => {if (ano === yearProfessor || yearProfessor === 'todos') return bimesters})
        setFilteredMaterial(actual => ({...actual, ...tempMaterial.year.filter(elem => elem !== undefined)}))
    }

    function filterSubject() {
        const tempMaterial = {}
        // tempMaterial.bimester = filteredMaterial.year.map

    }

    useEffect(() => {
        return () => {
            setSelected(actual => {
                if (actual !== "aulas" && lessonsAnimation === 'back') {
                    setLessonsAnimation('go')
                }    
                return actual
            })
        }
    }, [])


    return (
        <LessonsContentDiv animation={lessonsAnimation}>
            <div className="lessons-title">
                {user.position === 'Estudante' && <h2>{user?.ano}</h2>}
                <h3>Bem vindo, {user?.name?.split(' ').slice(0, 1).join("")}!</h3>
            </div>
            <div className="lessons-filter">
                {
                    user?.position.toLowerCase() === "estudante" && <div>
                            Filtrar por matéria:
                            <SearchInput options={allSubjects.map(subjectMap => ({value: subjectMap, texto: subjectMap}))} optionSetter={setSubject}/>
                        </div>
                }
                {
                    user?.position.toLowerCase().includes("professor") && <>
                            <div>
                                Filtrar por ano:
                                <SearchInput options={[
                                    {value:"todos", texto: "Todos"},
                                    {value:"1º Ano EF", texto: "1º Ano EF"},
                                    {value:"2º Ano EF", texto: "2º Ano EF"},
                                    {value:"3º Ano EF", texto: "3º Ano EF"},
                                    {value:"4º Ano EF", texto: "4º Ano EF"},
                                    {value:"5º Ano EF", texto: "5º Ano EF"},
                                    {value:"6º Ano EF", texto: "6º Ano EF"},
                                    {value:"7º Ano EF", texto: "7º Ano EF"},
                                    {value:"8º Ano EF", texto: "8° Ano EF"},
                                    {value:"1º Ano EM", texto: "1º Ano EM"},
                                    {value:"2º Ano EM", texto: "2º Ano EM"},
                                    {value:"3º Ano EM", texto: "3º Ano EM"}
                                ]                                    
                                } optionSetter={setYearProfessor}/>
                            </div>
                            <div>
                                Filtrar por matéria:
                                <SearchInput options={allSubjects.map(subjectMap => ({value: subjectMap, texto: subjectMap}))} optionSetter={setSubject}/>
                            </div>
                            <div>
                                Filtrar por bimestre:
                                <SearchInput options={[{value: "todos", texto: "Todos"}, {value: "1", texto: "Bimestre 1"}, {value: "2", texto: "Bimestre 2"}, {value: "3", texto: "Bimestre 3"}, {value: "4", texto: "Bimestre 4"}]} optionSetter={setBimesterProfessor}/>
                            </div>
                            <div>
                                Filtrar por aula:
                                <SearchInput options={[{value: "todas", texto: "Todas"}, {value: "aulas", texto: "Aulas"}, {value: "extras", texto: "Aulas Extras"}]} optionSetter={setLessonsProfessor}/>
                            </div>
                        </>
                }
            </div>
            <div>
                <ul className="lessons-cardList">
                    {
                        user?.position.toLowerCase() === "estudante" && material.map(({ano, bimesters}) => {
                            if (ano === user?.ano) {
                                return bimesters.map((bimester, index) => (
                                    Object.keys(...bimester.subejects).includes(subject) && <li key={index}>
                                        <div className="lessons-card" onClick={() => {setSelected("bimestres"); history.push(`/dashboard/${subject}/${bimester.bimester}`)}}>
                                            <GrTemplate />
                                            <div>
                                                <h3>Bimestre {bimester.bimester}</h3>
                                                <h4>{user?.ano}°</h4>
                                                <h4>{subject}</h4>
                                            </div>
                                            </div>
                                    </li>
                                ))                                
                            }
                            
                            return null
                        })
                    }
                    {
                        user?.position.toLowerCase().includes('professor') && <BimesterContent>
                        <div className="bimester-content">
                            <ul>
                                {
                                }
                            </ul>
                        </div>
                    </BimesterContent>
                    }
                </ul>
            </div>
        </LessonsContentDiv>
    )
}