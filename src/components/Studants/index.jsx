import { ButtonContainer, Container, Header, Icon, TotalContent, TotalStudants, Body, CardStudant, UserName, UserEmail, UserRemove } from "./styles"
import { BsBook } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import { IoPersonRemoveSharp } from "react-icons/io5"

export default function Studants() {
    return(
        <Container>
            <Header>
                <TotalStudants>
                    <Icon>
                        <BsBook />
                    </Icon>
                        <TotalContent>
                            <p>Total de alunos(as):</p>
                            <h3>5</h3>
                        </TotalContent>
                </TotalStudants>

                <ButtonContainer>
                    <button><span>+</span> Adicionar Aluno</button>
                </ButtonContainer>
            </Header>

            <Body>
                <CardStudant>
                    <UserName>
                        <span><FiUser /></span>
                        <p>Aluno 1</p>
                    </UserName>
                    <UserEmail>
                        <p>aluno@aluno.com</p>
                    </UserEmail>
                    <UserRemove>
                        <IoPersonRemoveSharp />
                    </UserRemove>
                </CardStudant>

                <CardStudant>
                    <UserName>
                        <span><FiUser /></span>
                        <p>Aluno 2</p>
                    </UserName>
                    <UserEmail>
                        <p>aluno@aluno.com</p>
                    </UserEmail>
                    <UserRemove>
                        <IoPersonRemoveSharp />
                    </UserRemove>
                </CardStudant>

                <CardStudant>
                    <UserName>
                        <span><FiUser /></span>
                        <p>Aluno 3</p>
                    </UserName>
                    <UserEmail>
                        <p>aluno@aluno.com</p>
                    </UserEmail>
                    <UserRemove>
                        <IoPersonRemoveSharp />
                    </UserRemove>
                </CardStudant>
            </Body>
        </Container>
    )
}