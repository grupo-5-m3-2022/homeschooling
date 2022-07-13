import { ContainerGrade, ContainerInfos, HeaderTable, GradesTable, MediaGrades, NoGrades } from "./styles"
import GradeCard from "../GradeCard"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { useUserStates } from "../Providers"
import SearchInput from "../SearchField"
import material from "../../services/material"


export default function Grade() {
    const [grades, setGrades] = useState([])
    const [token] = useState(localStorage.getItem("@token") || "")
    const { user } = useUserStates()
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]
    const [subject, setSubject] = useState(allSubjects[0])
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState("") // email only
    const [studentData, setStundentData] = useState({})

    function loadGrades(){
        api.get("/grades",{
            headers:{
                Authorization: `Bearer ${token}`
            },
            params: {
                studentEmail: user.email
            }
        })
        .then((response)=> (setGrades(response.data.filter((grade) => grade.subject === subject))))
    }

    
    useEffect(() => {
        loadGrades()
    }, [subject])
    
    function loadStudents(){
        api.get("/connections",{
            headers:{
                Authorization: `Bearer ${token}`
            },
            params: {
                professorEmail: user.email
            }
        })
        .then((response)  => {
            setStudents(response.data[0].students)
            setStudent(response.data[0].students[0].studentEmail)
            setStundentData(students.filter((aluno)=> aluno.studentEmail === student))
        })
        .catch((err)=> console.log(err))
    }

    function loadStudentGrade(){
       
        api.get("/grades",{
            headers:{
                Authorization: `Bearer ${token}`
            },
            params:{
                studentEmail: student
            }
        })
        .then((response) => setGrades(response.data))
        .catch((err)=> console.log(err))
         
    console.log(student)
    }
 
 console.log(student)

    useEffect(()=>{
        setStundentData(students.filter((aluno)=> aluno.studentEmail === student))
        loadStudentGrade()
    },[student])

    useEffect(() => {
        loadStudents()
        loadStudentGrade()
    }, [])
    

    const score = grades.map((grade) => grade.actualGrade).reduce((previousValue, currentValue)=>{
        return previousValue + currentValue
    }, 0) / grades.length 

    return (
        <>
        {user.position === "Estudante" ?
        <ContainerGrade>
            <ContainerInfos>
                {user.position === 'Estudante' && <h3>{user.ano}</h3>}
                <p>Bem vindo, {user.name}</p>
                <SearchInput options={allSubjects.map(subject => ({value: subject, texto: subject}))} optionSetter={setSubject}/>
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
                        <p>{grades.length === 0 ? "-" : grades.length}</p>
                    </div>
                    <div>
                        <span>Média Geral:</span>
                        <p>{grades.length > 0 ? score : "Nenhuma nota foi adicionada"}</p>
                    </div>
                </MediaGrades>
            </GradesTable>
        </ContainerGrade> :
        <ContainerGrade>
        <ContainerInfos>
            <p>Bem vindo, {user.name}</p>
             <SearchInput options={students.map(student => 
                ({value: student.studentEmail, texto: student.studentEmail}))} optionSetter={setStudent}/>

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
                    <p>{grades.length === 0 ? "-" : grades.length}</p>
                </div>
                <div>
                    <span>Média Geral:</span>
                    <p>{grades.length > 0 ? score : "Nenhuma nota foi adicionada"}</p>
                </div>
            </MediaGrades>
        </GradesTable>
    </ContainerGrade>
    }

</>
    
)
}