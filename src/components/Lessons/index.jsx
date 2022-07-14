import SearchInput from "../SearchField";
import { GrTemplate, GrDocumentText } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { LessonsContentDiv, ModalBody, ModalHeader, ModalContent } from "./styles";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDashboardStates, useUserStates, useAnimationStates } from "../Providers";
import { useEffect } from "react";
import { BimesterContent } from "../../pages/Bimester/styles"
import Modal from 'react-modal';
import material from "../../services/material";
import api from "../../services/api";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from "react-toastify";


export default function Lessons() {
    const history = useHistory();
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]

    const { setSelected } = useDashboardStates()
    const { user } = useUserStates()
    const [modalAnimation, setModalAnimation] = useState('appearUp')

    const { lessonsAnimation, setLessonsAnimation } = useAnimationStates()
    const [yearProfessor, setYearProfessor] = useState("todos")
    const [subject, setSubject] = useState(user?.position?.toLowerCase().includes("professor") ? "todas" : allSubjects[0]);
    const [bimesterProfessor, setBimesterProfessor] = useState('todos')
    const [lessonsProfessor, setLessonsProfessor] = useState('todas')
    const [filteredMaterial, setFilteredMaterial] = useState({})

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        },
        overlay: {
            animation: `${modalAnimation} 400ms`,
            opacity: `${modalAnimation === 'hideUp' ? 0 : 1}`,
            zIndex: 3
        }
    };    

    const [, setFormSubject] = useState('')
    const [, setFormStudent] = useState('')


    const schema = yup.object().shape({
        subject: yup.string().required(),
        title: yup.string().required(),
        content: yup.string().required(),
        studentEmail: yup.string().email().required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    function onSubmit(data) {
        data = {...data, professorName: user?.name, professorEmail: user?.email, userId: user?.id}
        api.post('extra_lessons', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@token")}`
            }
        })
        .then(response => {
                response.status === 201 && toast.success('Sucesso ao cadastrar nova aula!')
                handleCloseModal()
        })
        .catch(() => {
            toast.error('Algo deu errado ao cadastrar nova aula!')
        })
    }

    function filterYearProfessor() {
        const tempMaterial = {}
        tempMaterial.year = material.filter(({ano, bimesters}) => {
            if ((ano === yearProfessor) || (yearProfessor === 'todos')) {
                bimesters = bimesters.map(bimester => {bimester.ano = ano; return bimester})
                return true
            }
            return false
        })
        setFilteredMaterial(actual => ({...actual, ...tempMaterial}))
    }

    function filterSubject() {
        const tempMaterial = {}
        tempMaterial.lessons = filteredMaterial?.bimester?.map((bimesters) => bimesters.filter(({subejects}) => (Object.keys(...subejects).includes(subject) || subject === 'todas')))
        setFilteredMaterial(actual => ({...actual, ...tempMaterial}))
    }

    function filterBimesterProfessor() {
        const tempMaterial = {}
        tempMaterial.bimester = filteredMaterial?.year?.map(({bimesters}) => bimesters.filter(({bimester}) => ((bimester === Number(bimesterProfessor)) || bimesterProfessor === 'todos')))
        setFilteredMaterial(actual => ({...actual, ...tempMaterial}))
    }

    useEffect(filterYearProfessor, [yearProfessor])
    useEffect(filterSubject, [filteredMaterial.bimester, subject])
    useEffect(filterBimesterProfessor, [filteredMaterial.year, bimesterProfessor])

    useEffect(() => {
        api.get("extra_lessons", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@token")}`
            }
        })
        .then(response => {
            const tempLessons = []
            for (const lesson of response.data) {
                if (user?.position.toLowerCase().includes('professor')) {
                    for (const student of user.alunos) {
                        if (lesson.studentEmail === student.studentEmail) {
                            tempLessons.push(lesson)
                        }
                    }
                }
                else if (user?.email === lesson.studentEmail) {
                    tempLessons.push(lesson)
                }
            }
            setFilteredMaterial(actual => ({...actual, extraLessons: tempLessons}))
        })

        return () => {
            setSelected(actual => {
                if (actual !== "aulas" && lessonsAnimation === 'back') {
                    setLessonsAnimation('go')
                }    
                return actual
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [modalAddLesson, setModalAddLesson] = useState(false)

    function handleOpenModal() {
        setModalAddLesson(true)
    }

    function handleCloseModal() {
        setModalAnimation('hideUp')
        setModalAddLesson(false)
    }

    return (
        <>
            {            
                user?.position?.toLowerCase().includes('professor') && <Modal closeTimeoutMS={500} ariaHideApp={false} isOpen={modalAddLesson} onRequestClose={handleCloseModal} style={customStyles} onAfterClose={() => {setModalAnimation('appearUp')}}>
                    <ModalHeader>
                        <h4>Cadastrar Aula Extra</h4>
                        <button onClick={handleCloseModal}><AiOutlineCloseCircle /></button>
                    </ModalHeader>

                    <ModalBody>
                        <ModalContent onSubmit={handleSubmit(onSubmit)}>
                                {errors?.subject?.message && <span>- {errors.subject.message}</span>}
                                <SearchInput options={[{valor: "", texto: "Selecione uma matéria"}, ...allSubjects.map(subjectMap => ({valor: subjectMap, texto: subjectMap}))]} optionSetter={setFormSubject} register={register} type="subject"/>
                                {errors?.title?.message && <span>- {errors.title.message}</span>}
                                <input type="text" placeholder="Titulo" {...register("title")} />
                                {errors?.content?.message && <span>- {errors.content.message}</span>}
                                <textarea placeholder="Escreva o conteudo" cols="30" rows="10" {...register("content")}></textarea>
                                {errors?.studentEmail?.message && <span>- {errors.studentEmail.message}</span>}
                                <SearchInput options={[{valor: "", texto: "Selecione um estudante"}, ...user?.alunos?.map(aluno => ({valor: aluno.studentEmail, texto: aluno.studentName}))]} optionSetter={setFormStudent} register={register} type="studentEmail"/>
                                <div>
                                    <button className="btnClose" onClick={handleCloseModal}>Cancelar</button>
                                    <button type="submit" className="btnSubmit">Cadastrar</button>
                                </div>
                        </ModalContent>
                    </ModalBody>
                </Modal>
            }
            <LessonsContentDiv animation={lessonsAnimation}>
                <div className="lessons-title">
                    {user.position === 'Estudante' && <h2>{user?.ano}</h2>}
                    <h3>Bem vindo, {user?.name?.split(' ').slice(0, 1).join("")}!</h3>
                </div>
                <div className="lessons-options">
                    <div className="lessons-filter">
                        {
                            user?.position.toLowerCase() === "estudante" && <>
                                <div>
                                    <p>Filtrar por matéria:</p>
                                    <SearchInput options={allSubjects.map(subjectMap => ({valor: subjectMap, texto: subjectMap}))} optionSetter={setSubject}/>
                                </div>
                                <div>
                                    <p>Filtrar por aula:</p>
                                    <SearchInput options={[{valor: "todas", texto: "Todas"}, {valor: "aulas", texto: "Aulas"}, {valor: "extras", texto: "Aulas Extras"}]} optionSetter={setLessonsProfessor}/>
                                </div>
                            </>
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
                                    <SearchInput options={[{valor: "todas", texto: "Todas"}, ...allSubjects.map(subjectMap => ({valor: subjectMap, texto: subjectMap}))]} optionSetter={setSubject}/>
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
                {
                    user?.position.toLowerCase().includes("professor") &&
                        <button onClick={handleOpenModal}>+ Adicionar Conteúdo</button>
                }
            </div>
            <div>
                <ul className="lessons-cardList">
                    {
                        user?.position.toLowerCase() === "estudante" && (lessonsProfessor === "todas" || lessonsProfessor === 'aulas') && material.map(({ano, bimesters}) => {
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
                        user?.position.toLowerCase().includes('professor') && (lessonsProfessor === "todas" || lessonsProfessor === 'aulas') && <li>
                            <BimesterContent nopadding>
                                <div className="bimester-content">
                                    <ul>
                                        {
                                            filteredMaterial?.lessons?.map((filteredBimesters) => filteredBimesters.map((filteredLesson) => filteredLesson.subejects.map(lesson => {
                                                if (subject === 'todas') {
                                                    return Object.keys(lesson).map(lessonSubject => (
                                                        lesson[lessonSubject].map((finalLesson, index) => (
                                                            <li key={index}>
                                                                <div className="lesson-info" onClick={() => {setSelected("article"); history.push(`/dashboard/${lessonSubject.toLowerCase()}/${filteredLesson.bimester}/${index}?ano=${filteredLesson.ano}`)}}>
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
                                                                <div className="lesson-info" onClick={() => {setSelected("article"); history.push(`/dashboard/${subject}/${filteredLesson.bimester.toLowerCase()}/${index}?ano=${filteredLesson.ano}`)}}>
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
                        </li>                   
                    }
                    {
                        (lessonsProfessor === "todas" || lessonsProfessor === 'extras') && <li>
                            <BimesterContent nopadding>
                                <div className="bimester-content">
                                    <ul>
                                        {
                                            filteredMaterial?.extraLessons?.map((extraLesson, index) => <li key={index}>
                                                <div className="lesson-info" onClick={() => {setSelected("article"); history.push(`/dashboard/${extraLesson.subject}/null/${index}?extra=true`)}}>
                                                    <div className="lesson-title">
                                                        <GrDocumentText />
                                                        <h3>{extraLesson.title.split(' ').length > 8 ? extraLesson.title.split(' ').slice(0, 8).join(' ') + '...' : extraLesson.title}</h3>
                                                    </div>
                                                    <div className="lesson-moreInfo">
                                                        <p>Matéria: {extraLesson.subject}</p>
                                                    </div>
                                                </div>                                                
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </BimesterContent>
                        </li>                       
                    }
                </ul>
            </div>
        </LessonsContentDiv>
    </>
   )
}