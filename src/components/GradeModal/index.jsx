import { Container, ContainerForm, ContainerInput, Header, ModalBackground } from "./style"
import { FaTimes } from "react-icons/fa"    
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import api from "../../services/api"
import { useUserStates } from "../Providers"
import { toast } from "react-toastify"
import Select from "../Select"
import material from "../../services/material"
import { useState, useRef, useEffect } from "react"


export default function GradeModal({setModal, token, loadStudentGrade}){
    const {user} = useUserStates()
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]
    const [subject, setSubject] = useState(allSubjects[0])
    const [modalAnimation, setModalAnimation] = useState('appearUp')
    const modalBackground = useRef()

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        studentName: yup.string().required("Campo obrigatório"),
        studentEmail: yup.string().required("Campo obrigatório"),
        actualGrade: yup.number().typeError("A nota precisa ser um número").required("Campo obrigatório"),
        maxGrade: yup.number().typeError("A nota precisa ser um número").required("Campo obrigatório"),
        date: yup.string().required("Campo obrigatório"),
    })

    useEffect(() => {
        function KeyWatcher (Event){
            if (Event.key === "Escape") {
                handleModalClose()
            }
        }

        window.addEventListener("keyup", KeyWatcher)
        return () => {
            window.removeEventListener("keyup", KeyWatcher)
        }
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    function handleModalClose() {
        setModalAnimation('hideUp')
    }

    function onSubmit(grade){
        const {
            name,
            studentEmail,
            studentName,
            date,
            maxGrade,
            actualGrade
        } = grade

        api.post("/grades", {
            subject: subject,
            name: name,
            studentEmail: studentEmail,
            studentName: studentName,
            date: date,
            maxGrade: maxGrade,
            actualGrade: actualGrade,
            professorName: user.name,
            professorEmail: user.email,
            userId: user.id
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => {
            toast.success("Nota adicionada com sucesso!")
            handleModalClose()
        })
        .then(() => loadStudentGrade())
        .catch((err)=>{
            toast.error("Ops, algo deu errado")
        })

    }

    
    return(
        <ModalBackground ref={modalBackground} onClick={Event => {if (Event.target === modalBackground.current) {handleModalClose()}}} modalAnimation={modalAnimation} onAnimationEnd={() => modalAnimation === 'hideUp' ? setModal(false) : ""}>
            <Container>
            <Header>
            <p>Lançar Nota</p>
            <button onClick={handleModalClose}><FaTimes/></button>
            </Header>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ContainerForm>
                <Select  options={allSubjects.map(subject => ({valor: subject, texto: subject}))} optionSetter={setSubject}/>
                <ContainerInput>
                    {errors.name ?<span>{errors.name.message}</span> : null }
                    <input type="text" {...register("name")} placeholder={"Referência"}/>
                    </ContainerInput>
                <ContainerInput>
                    {errors.studentName ?<span>{errors.studentName.message}</span> : null }
                    <input type="text" {...register("studentName")} placeholder={"Nome do aluno"}/>
                    </ContainerInput>
                <ContainerInput>
                    {errors.studentEmail ?<span>{errors.studentEmail.message}</span> : null }
                    <input type="text" {...register("studentEmail")} placeholder={"Email do aluno"}/>
                    </ContainerInput>
                <ContainerInput>
                    {errors.actualGrade ?<span>{errors.actualGrade.message}</span> : null }
                    <input type="number" {...register("actualGrade")} placeholder={"Nota Obtida"}/>
                    </ContainerInput>
                <ContainerInput>
                    {errors.maxGrade ?<span>{errors.maxGrade.message}</span> : null }
                    <input type="number" {...register("maxGrade")} placeholder={"Nota máxima"}/>
                    </ContainerInput>
                <ContainerInput>
                    {errors.date ?<span>{errors.date.message}</span> : null }
                    <input type="text" {...register("date")} placeholder={"Data"}/>
                    </ContainerInput>
                <button type="submit">Enviar</button>
            </ContainerForm>
            </form>
        </Container>
        </ModalBackground>
   )
}