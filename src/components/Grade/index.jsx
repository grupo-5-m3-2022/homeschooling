import { ContainerGrade, ContainerInfos, HeaderTable, GradesTable, MediaGrades, Btn, NoGrades } from "./styles"
import GradeCard from "../GradeCard"
import { useEffect, useState } from "react"
import api from "../../services/api"


export default function Performance() {
    const [grades, setGrades] = useState([])
    const [token] = useState(localStorage.getItem("@token") || "")
    const [userId] = useState(localStorage.getItem("@userId") || "")
    const [userEmail, setUserEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [userAno, setUserAno] = useState("")

    function loadUserInfos(){
        api.get(`users/${userId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setUserEmail(response.data.email)
            setUserName(response.data.name)
            setUserAno(response.data.ano)
        })
    }

    function loadGrades(){
        api.get("/grades",{
            headers:{
                Authorization: `Bearer ${token}`
            },
            params: {
                studentEmail: userEmail
            }
        })
        .then((response)=> setGrades(response.data))
    }
    
    useEffect(() => {
        loadUserInfos()
        loadGrades()
    }, [grades])

    const score = grades.map((grade) => grade.actualGrade).reduce((previousValue, currentValue)=>{
        return previousValue + currentValue
    }, 0) / grades.length 

    return (
        <ContainerGrade>
            <ContainerInfos>
                <h3>{userAno}</h3>
                <p>Bem vindo, {userName}</p>
            <Btn>&lt; Voltar </Btn>
            </ContainerInfos>
            <GradesTable>
            <div>
                <HeaderTable>
                    <div className="subject">Matéria</div>
                    <div className="name">Nome</div>
                    <div className="date">Data</div>
                    <div className="score max">Nota Máxima</div>
                    <div className="score">Nota Obtida</div>
                </HeaderTable>
                {grades.length > 0 ? 
                grades.map((grade)=>( 
                    <GradeCard key={grade.id} subject={grade.subject} name={grade.name} date={grade.date} maxGrade={grade.maxGrade} actualGrade={grade.actualGrade}/>
                )):
                <NoGrades> Nenhuma nota foi adicionada até o momento </NoGrades>}
                </div>
                <MediaGrades>
                    <div>
                        <span>Atividades:</span>
                        <p>{grades.length === 0 ? 0 : grades.length}</p>
                    </div>
                    <div>
                        <span>Média Geral:</span>
                        <p>{grades.length > 0 ? score : "Nenhuma nota foi adicionada"}</p>
                    </div>
                </MediaGrades>
            </GradesTable>

        </ContainerGrade>

    )
}