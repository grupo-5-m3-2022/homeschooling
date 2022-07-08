import { ContainerCard  } from "./style"
function GradeCard({name, date, maxGrade, actualGrade}){

    return(
        <ContainerCard>
            <span>{name}</span>
            <span>{date}</span>
            <span>{maxGrade}</span>
            <span>{actualGrade}</span>
        </ContainerCard>
    )
}

export default GradeCard