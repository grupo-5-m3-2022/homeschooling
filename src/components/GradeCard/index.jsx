import { ContainerCard  } from "./style"
import { useState } from "react"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import api from "../../services/api"

function GradeCard({ isProfessor, deleteGrade, grade, setModalEdit}){
    const {subject, name, date, maxGrade, actualGrade, id } = grade
    const [token] = useState(localStorage.getItem("@token") || "")


    function collectId(id){
        localStorage.setItem("@idCard", id)
        setModalEdit(true)
        getGradeInfos(id)
    }

    function getGradeInfos(id){

        api.get(`/grades/${id}`,{
            headers: {
            Authorization: `Bearer ${token}`
        }    
        })
        .then((response) => {
            console.log(response.data)
            localStorage.setItem("@gradeName", response.data.studentName)
            localStorage.setItem("@gradeEmail", response.data.studentEmail)
            localStorage.setItem("@gradeSubject", response.data.subject)
        })
        .catch(err => console.log(err))
    }

    return(
        <ContainerCard>
            <span className="subject">{subject}</span>
            <span className="name">{name}</span>
            <span className="date">{date}</span>
            <span className="scoreMax">{maxGrade}</span>
            <span className="score">{actualGrade}
            {isProfessor ? 
            <span className="btns">
                <button className="edit" onClick={() => collectId(id)}><FiEdit /></button> 
                <button className="delete" onClick={() => deleteGrade(id)}><FiTrash2 /> </button>
            </span>: null }</span>
            
        </ContainerCard>
    )
}

export default GradeCard