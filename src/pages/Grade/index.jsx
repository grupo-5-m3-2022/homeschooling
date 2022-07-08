import { Btn, ContainerGrade, ContainerInfos, GradesTable, HeaderTable, MediaGrades } from "./style"
import GradeCard from "../../components/GradeCard"


function Grade({name, ano}){

    return(
        <ContainerGrade>
            <ContainerInfos>
                <h3>6 ano Ensino Fundamental{ano}</h3>
                <p>Bem vindo, Fulano{name}</p>
            <Btn>&lt; Voltar </Btn>
            </ContainerInfos>
            <GradesTable>
            <div>
                <HeaderTable>
                    <span>Nome</span>
                    <span>Data</span>
                    <span>Nota Máxima</span>
                    <span>Nota Obtida</span>
                </HeaderTable>
                <GradeCard name="Historia" date="12/08/2022" maxGrade="10" actualGrade="8"/>
                <GradeCard name="Historia" date="12/08/2022" maxGrade="10" actualGrade="8"/>
                <GradeCard name="Historia" date="12/08/2022" maxGrade="10" actualGrade="8"/>
                <GradeCard name="Historia" date="12/08/2022" maxGrade="10" actualGrade="8"/>
                </div>
                <MediaGrades>
                    <div>
                        <span>Atividades:</span>
                        <p>4</p>
                    </div>
                    <div>
                        <span>Média Geral:</span>
                        <p>8,5</p>
                    </div>
                </MediaGrades>
            </GradesTable>

        </ContainerGrade>
    )
}

export default Grade