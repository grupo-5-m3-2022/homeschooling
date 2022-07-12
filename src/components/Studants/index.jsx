import { ButtonContainer, Container, Header, Icon, TotalContent, TotalStudants, Body, CardStudant, UserName, UserEmail, UserRemove, ModalHeader, ModalBody, ModalContent } from "./styles"
import { BsBook } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import { IoPersonRemoveSharp } from "react-icons/io5"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Modal from 'react-modal';
import { useState } from "react";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export default function Studants() {
    const [modalAddStudant, setModalAddStudant] = useState(false)

    function handleOpenModal() {
        setModalAddStudant(true)
    }

    function handleCloseModal() {
        setModalAddStudant(false)
    }

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
                    <button onClick={handleOpenModal}><span>+</span> Adicionar Aluno</button>
                </ButtonContainer>

                <Modal isOpen={modalAddStudant} onRequestClose={handleCloseModal} style={customStyles}>
                    <ModalHeader>
                        <h4>Cadastrar Aluno</h4>
                        <button onClick={handleCloseModal}><AiOutlineCloseCircle /></button>
                    </ModalHeader>

                    <ModalBody>
                        <ModalContent>
                            <input placeholder="Digite o e-mail do(a) aluno(a)"/>
                            <input placeholder="Digite o nome do(a) aluno(a)"/>
                            <div>
                                <button onClick={handleCloseModal} className="btnClose">Cancelar</button>
                                <button className="btnSend">Enviar</button>
                            </div>
                        </ModalContent>
                    </ModalBody>
                </Modal>
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