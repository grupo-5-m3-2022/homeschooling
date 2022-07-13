import { Container, ContainerForm, ContainerInput, Header } from "./style"
import { FaTimes } from "react-icons/fa"    
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import api from "../../services/api"
import { useUserStates } from "../Providers"
import { toast } from "react-toastify"
import { useState } from "react"


function GradeModalEdit({setModalEdit, token, loadStudentGrade}){
    const id = localStorage.getItem("@idCard")
    const {user} = useUserStates()

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        actualGrade: yup.number().typeError("A nota precisa ser um número").required("Campo obrigatório"),
        maxGrade: yup.number().typeError("A nota precisa ser um número").required("Campo obrigatório"),
        date: yup.string().required("Campo obrigatório"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

           console.log(localStorage.getItem("@gradeName"))
           console.log(localStorage.getItem("@gradeEmail"))

    function onSubmitEdit(grade){

        const {
            name,
            date,
            maxGrade,
            actualGrade
        } = grade
        console.log("clcik")

        api.put(`/grades/${id}`, {
            subject: localStorage.getItem("@gradeSubject"),
            name: name,
            studentEmail: localStorage.getItem("@gradeEmail"),
            studentName: localStorage.getItem("@gradeName"),
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
            toast.success("Nota editada com sucesso!")
            setModalEdit(false)
        })
        .then(() => loadStudentGrade())
        .catch((err)=>{
            toast.error("Ops, algo deu errado")
            console.log(err)
        })

    }



    return(
    <>
    
            <Container>
            <Header>
            <p>Editar Nota</p>
            <button onClick={()=> setModalEdit(false)}><FaTimes/></button>
            </Header>
            <form onSubmit={handleSubmit(onSubmitEdit)}>
            <ContainerForm>
                <ContainerInput>
                    {errors.name ?<span>{errors.name.message}</span> : null }
                    <input type="text" {...register("name")} placeholder={"Referência"}/>
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
    </>
    )
}

export default GradeModalEdit