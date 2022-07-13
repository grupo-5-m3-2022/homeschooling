import SearchInput from "../SearchField";
import { GrTemplate, GrDocumentText } from "react-icons/gr";
import { LessonsContentDiv } from "./styles";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDashboardStates, useUserStates, useAnimationStates } from "../Providers";
import { useEffect } from "react";
import { BimesterContent } from "../../pages/Bimester/styles"
import material from "../../services/material";
import api from "../../services/api";

export default function Lessons() {
    const history = useHistory();
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]

    const { setSelected } = useDashboardStates()
    const { user } = useUserStates()

    const { lessonsAnimation, setLessonsAnimation } = useAnimationStates()
    const [yearProfessor, setYearProfessor] = useState("todos")
    const [subject, setSubject] = useState('todos');
    const [bimesterProfessor, setBimesterProfessor] = useState('todos')
    const [lessonsProfessor, setLessonsProfessor] = useState('todas')
    const [filteredMaterial, setFilteredMaterial] = useState({})

    useEffect(filterYearProfessor, [yearProfessor])
    useEffect(filterSubject, [filteredMaterial.bimester, subject])
    useEffect(filterBimesterProfessor, [filteredMaterial.year, bimesterProfessor])

    function filterYearProfessor() {
        const tempMaterial = {}
        tempMaterial.year = material.filter(({ano}) => ((ano === yearProfessor) || (yearProfessor === 'todos')))
        setFilteredMaterial(actual => ({...actual, ...tempMaterial}))
    }

    function filterSubject() {
        const tempMaterial = {}
        tempMaterial.lessons = filteredMaterial?.bimester?.map((bimesters) => bimesters.filter(({subejects}) => (Object.keys(...subejects).includes(subject) || subject === 'todos')))
        setFilteredMaterial(actual => ({...actual, ...tempMaterial}))
    }

    function filterBimesterProfessor() {
        const tempMaterial = {}
        tempMaterial.bimester = filteredMaterial?.year?.map(({bimesters}) => bimesters.filter(({bimester}) => ((bimester === Number(bimesterProfessor)) || bimesterProfessor === 'todos')))
        setFilteredMaterial(actual => ({...actual, ...tempMaterial}))
    }

    useEffect(() => {
        api.get("extra_lessons", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@token")}`
            }
        })
        // .then(response => console.log(response))

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
                            <p>Filtrar por matéria:</p>
                            <SearchInput options={allSubjects.map(subjectMap => ({valor: subjectMap, texto: subjectMap}))} optionSetter={setSubject}/>
                        </div>
                }
                {
                    user?.position.toLowerCase().includes("professor") && <>
                            <div>
                                <p>Filtrar por ano:</p>
                                <SearchInput options={[
                                    {valor:"todos", texto: "Todos"},
                                    {valor:"1º Ano EF 1", texto: "1º Ano EF 1"},
                                    {valor:"2º Ano EF 1", texto: "2º Ano EF 1"},
                                    {valor:"3º Ano EF 1", texto: "3º Ano EF 1"},
                                    {valor:"4º Ano EF 1", texto: "4º Ano EF 1"},
                                    {valor:"5º Ano EF 2", texto: "5º Ano EF 2"},
                                    {valor:"6º Ano EF 2", texto: "6º Ano EF 2"},
                                    {valor:"7º Ano EF 2", texto: "7º Ano EF 2"},
                                    {valor:"8º Ano EF 2", texto: "8° Ano EF 2"},
                                    {valor:"1º Ano EM", texto: "1º Ano EM"},
                                    {valor:"2º Ano EM", texto: "2º Ano EM"},
                                    {valor:"3º Ano EM", texto: "3º Ano EM"}
                                ]                                    
                                } optionSetter={setYearProfessor}/>
                            </div>
                            <div>
                                <p>Filtrar por matéria:</p>
                                <SearchInput options={[{valor: "todos", texto: "Todos"}, ...allSubjects.map(subjectMap => ({valor: subjectMap, texto: subjectMap}))]} optionSetter={setSubject}/>
                            </div>
                            <div>
                                <p>Filtrar por bimestre:</p>
                                <SearchInput options={[{valor: "todos", texto: "Todos"}, {valor: "1", texto: "Bimestre 1"}, {valor: "2", texto: "Bimestre 2"}, {valor: "3", texto: "Bimestre 3"}, {valor: "4", texto: "Bimestre 4"}]} optionSetter={setBimesterProfessor}/>
                            </div>
                            <div>
                                <p>Filtrar por aula:</p>
                                <SearchInput options={[{valor: "todas", texto: "Todas"}, {valor: "aulas", texto: "Aulas"}, {valor: "extras", texto: "Aulas Extras"}]} optionSetter={setLessonsProfessor}/>
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
                        user?.position.toLowerCase().includes('professor') && (lessonsProfessor === "todas" || lessonsProfessor === 'aulas') && <BimesterContent nopadding>
                        <div className="bimester-content">
                            <ul>
                                {
                                    filteredMaterial?.lessons?.map((filteredBimesters) => filteredBimesters.map((filteredLesson) => filteredLesson.subejects.map(lesson => {
                                        if (subject === 'todos') {
                                            return Object.keys(lesson).map(lessonSubject => (
                                                lesson[lessonSubject].map((finalLesson, index) => (
                                                    <li key={index}>
                                                        <div className="lesson-info" onClick={() => history.push(`/dashboard/${subject}/${0}/${index}`)}>
                                                            <div className="lesson-title">
                                                                <GrDocumentText />
                                                                <h3>{finalLesson.title.split(' ').length > 8 ? finalLesson.title.split(' ').slice(0, 8).join(' ') + '...' : finalLesson.title}</h3>
                                                            </div>
                                                            <div className="lesson-moreInfo">
                                                                <p>Bimestre: {filteredLesson.bimester}</p>
                                                                <p>Matéria: {lessonSubject}</p>
                                                            </div>

                                                        </div>
                                                    </li>
                                                ))))
                                        }
                                        else {
                                            return lesson[subject].map((finalLesson, index) => (
                                                    <li key={index}>
                                                        <div className="lesson-info" onClick={() => history.push(`/dashboard/${subject}/${0}/${index}`)}>
                                                            <div className="lesson-title">
                                                                <GrDocumentText />
                                                                <h3>{finalLesson.title.split(' ').length > 8 ? finalLesson.title.split(' ').slice(0, 8).join(' ') + '...' : finalLesson.title}</h3>
                                                            </div>
                                                            <div className="lesson-moreInfo">
                                                                <p>Bimestre: {filteredLesson.bimester}</p>
                                                                <p>Matéria: {subject}</p>
                                                            </div>

                                                        </div>
                                                    </li>
                                                ))
                                        }
                                    })))
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