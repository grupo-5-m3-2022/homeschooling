import { ButtonContainer, Container, Header, Icon, TotalContent, TotalStudants, Body, CardStudant, UserName, UserEmail, UserRemove, ModalHeader, ModalBody, ModalContent } from "./styles"
import { BsBook } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import { IoPersonRemoveSharp } from "react-icons/io5"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { useUserStates } from "../Providers"
import api from "../../services/api"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

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
    const {user} = useUserStates()
    const token = localStorage.getItem("@token")
    const id = localStorage.getItem("@userId")
    const [studantsList, setStudantsList] = useState([])
    const length = studantsList?.length || 0

    async function loadStudants() {
        const res = await api.get('/connections', {
            headers: {
                Authorization: `Bearer ${token}`
            }, 
            params: {
                professorEmail: user.email
            }
        })
        .then(response => {
            setStudantsList(response.data)
        })
        .catch(err => console.log(err))

        return res
    }

    useEffect(() => {
        loadStudants()
    })
    
    const schema = yup.object().shape({
        email: yup.string().required('Campo obrigatório').email('Email inválido'),
        name: yup.string().required('Campo obrigatório').min(2, 'Mínimo de 2 caractéres')
    })
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    function onSubmit({email, name}) {
        const emailAlreadyUsed = studantsList.filter(student => {
            return student.students[0].studentEmail === email
        })
        
        const newUser = {
            "professorName": user.name,
            "professorEmail": user.email,
            "students": [
                {
                    "studentName": name,
                    "studentEmail": email
                }
            ],
            "userId": id
        }

        if(emailAlreadyUsed.length === 0) {
            api.post('/connections', newUser, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((_) => {
                handleCloseModal()
                toast.success('Aluno(a) adicionado com sucesso!')
            })
            .catch(err => console.log(err))
        } else {
            toast.error('Email já cadastrado')
        }
    }

    const [modalAddStudant, setModalAddStudant] = useState(false)
    function handleOpenModal() {
        setModalAddStudant(true)
    }

    function handleCloseModal() {
        setModalAddStudant(false)
    }

    function handleRemoveStudant(email) {
        const filterEmail = studantsList.filter(student => student.students[0].studentEmail !== email)
        console.log(filterEmail)
        api.put('/connections', filterEmail, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => toast.success(`Aluno ${email} removido com sucesso!`))
        .catch(err => console.log(err))
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
                            <h3>{length}</h3>
                        </TotalContent>
                </TotalStudants>

                <ButtonContainer>
                    <button onClick={handleOpenModal}><span>+</span> Adicionar Aluno</button>
                </ButtonContainer>

                <Modal ariaHideApp={false} isOpen={modalAddStudant} onRequestClose={handleCloseModal} style={customStyles}>
                    <ModalHeader>
                        <h4>Cadastrar Aluno</h4>
                        <button onClick={handleCloseModal}><AiOutlineCloseCircle /></button>
                    </ModalHeader>

                    <ModalBody>
                        <ModalContent onSubmit={handleSubmit(onSubmit)}>
                            {errors?.email?.message && <span>- {errors.email.message}</span>}
                            <input {...register("email")} placeholder="Digite o e-mail do(a) aluno(a)"/>
                            {errors?.name?.message && <span>- {errors.name.message}</span>}
                            <input {...register("name")} placeholder="Digite o nome do(a) aluno(a)"/>
                            <div>
                                <button onClick={handleCloseModal} className="btnClose">Cancelar</button>
                                <button type="submit" className="btnSend">Enviar</button>
                            </div>
                        </ModalContent>
                    </ModalBody>
                </Modal>
            </Header>

            <Body>
                {studantsList?.map((student, index) => (
                <CardStudant key={index}>
                    <UserName>
                        <span><FiUser /></span>
                        <p>{student.students[0].studentName}</p>
                    </UserName>
                    <UserEmail>
                        <p>{student.students[0].studentEmail}</p>
                    </UserEmail>
                    <UserRemove onClick={() => handleRemoveStudant(student.students[0].studentEmail)}>
                        <IoPersonRemoveSharp />
                    </UserRemove>
                </CardStudant>
                ))}
            </Body>
        </Container>
    )
}