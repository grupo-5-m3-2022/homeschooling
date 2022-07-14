import { ContainerGrade, ContainerInfos, HeaderTable, GradesTable, MediaGrades, NoGrades } from "./styles"
import GradeCard from "../GradeCard"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { useUserStates } from "../Providers"
import SearchInput from "../SearchField"
import material from "../../services/material"
import GradeModal from "../GradeModal"
import { toast } from "react-toastify"
import GradeModalEdit from "../GradeModalEdit"


export default function Grade() {
    const [grades, setGrades] = useState([])
    const [token] = useState(localStorage.getItem("@token") || "")
    const { user } = useUserStates()
    const allSubjects = [...new Set(material[0].bimesters.map(bimester => (Object.keys(...bimester.subejects))).flat())]
    const [subject, setSubject] = useState(allSubjects[0])
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState("") 
    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)

   function loadGrades(){
        api.get("/grades",{
            headers:{
                Authorization: `Bearer ${token}`
            },
            params: {
                studentEmail: user.email
            }
        })
        .then((response)=> {
            const filteredGrade = response.data.filter((grade) => grade.subject === subject)
            setGrades(filteredGrade)
        })
    }

    if(user.position === "Estudante"){
        loadGrades()
    }
    
    useEffect(() => {
        loadGrades()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subject])


    //professor
    
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
            setStudents(response.data[0]?.students)
            setStudent(response.data[0]?.students[0]?.studentEmail)
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
    }
 

    useEffect(()=>{
        loadStudentGrade()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [student])

    useEffect(() => {
        loadStudents()
        loadStudentGrade()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    function deleteGrade(id){
        api.delete(`/grades/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((_)=> {
            toast.success("Nota deletada")
            loadStudentGrade()
        })
        .catch((err) => console.log(err))
    }


    const score = grades.map((grade) => grade.actualGrade).reduce((previousValue, currentValue)=>{
        return previousValue + currentValue
    }, 0) / grades.length 

    return (
        <>
        {user.position === "Estudante" ?
        <ContainerGrade>
            <ContainerInfos>
                <p>Bem vindo, {user.name}</p>
                <SearchInput options={allSubjects.map(subject => ({valor: subject, texto: subject}))} optionSetter={setSubject}/>
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
                    <GradeCard key={grade.id} grade={grade}/>
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
                ({valor: student.studentEmail, texto: student.studentName}))} optionSetter={setStudent}/>
                <button onClick={()=> setModal(true)}>Lançar Nota</button>

        </ContainerInfos>
        <GradesTable>
        <div>
            {modal? <GradeModal loadStudentGrade={loadStudentGrade} 
            setModal={setModal} token={token}/> : null}
            { modalEdit ? <GradeModalEdit setModalEdit={setModalEdit} token={token} 
                loadStudentGrade={loadStudentGrade}/>: null }
            <HeaderTable>
                <div className="subject">Matéria</div>
                <div className="name">Nome</div>
                <div className="date">Data</div>
                <div className="score max">Nota Máxima</div>
                <div className="score">Nota Obtida</div>
            </HeaderTable>
            {grades.length > 0 ? 
            grades.map((grade)=>( 
                <GradeCard key={grade.id} deleteGrade={deleteGrade} setModalEdit={setModalEdit} 
                isProfessor grade={grade}/>
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