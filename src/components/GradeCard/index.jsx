import { ContainerCard  } from "./style"
function GradeCard({subject, name, date, maxGrade, actualGrade}){

    return(
        <ContainerCard>
            <span className="subject">{subject}</span>
            <span className="name">{name}</span>
            <span className="date">{date}</span>
            <span className="score max">{maxGrade}</span>
            <span className="score">{actualGrade}</span>
        </ContainerCard>
    )
}

export default GradeCard