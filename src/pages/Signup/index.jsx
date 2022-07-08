import React, { useState } from 'react'
import { Background, Container, Content, ImageContainer, ImageDiv, InputContainer } from './styles'
import { AiOutlineMail, AiOutlineUser, AiOutlineLock, AiOutlineInfoCircle } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

export default function SignUp() {

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório').min(2, 'Mínimo de 2 caractéres'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório').min(6, 'Mínimo de 6 caractéres'),
        confirmPassword: yup.string().oneOf([yup.ref("password")], 'Senhas não combinam').required('Campo obrigatório'),
        position: yup.string().required('Campo obrigatório'),
        ano: yup.string().required('Campo obrigatório')
    })

    const history = useHistory()

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const [positionType] = useState(["Estudante", "Professor"])
    const Pos = positionType.map(Pos => Pos)
    const [inputPosition, setInputPosition] = useState("")
    
    function change(event) {
        setInputPosition(event.target.value)
    }
    
    function onSubmit({name, email, password, position, ano}) {
        const grade = []
        const user = {name, email, password, position, ano, grade}
        api.post('/signup', user)
            .then((_) => {
                toast.success('Sucesso ao criar a conta!')
                setTimeout(() => {
                    return history.push('/')
                }, 1500)
            })
            .catch((_) => {
                toast.error('Erro ao criar a conta, tente outro e-mail!')
            })
    }
    return (
        <Background>
            <Container>
                <Content>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Cadastrar Usuario</h2>
                        {errors.name?.message && <span>- {errors.name.message}</span>}
                        <InputContainer>
                            <AiOutlineUser />
                            <input name='name' {...register("name")} placeholder='Nome'/>
                        </InputContainer>
                        {errors.email?.message && <span>- {errors.name.message}</span>}
                        <InputContainer>
                            <AiOutlineMail />
                            <input name='email' {...register("email")} placeholder='Email'/>
                        </InputContainer>
                        {errors.password?.message && <span>- {errors.name.message}</span>}
                        <InputContainer>
                            <AiOutlineLock />
                            <input name='password' {...register("password")} type="password" placeholder='Senha'/>
                        </InputContainer>
                        {errors.confirmPassword?.message && <span>- {errors.name.message}</span>}
                        <InputContainer>
                            <AiOutlineLock />
                            <input name='confirmPassword' {...register("confirmPassword")} type="password" placeholder='Confirmar Senha'/>
                        </InputContainer>
                        {errors.position?.message && <span>- {errors.name.message}</span>}
                        <InputContainer>
                            <AiOutlineInfoCircle />
                            <select {...register("position")} onChange={e => change(e)}>
                                <option selected disabled value="">Selecione uma opção</option>
                                {
                                    Pos.map((position, key) => <option value={key}>{position}</option>)
                                }
                            </select>
                        </InputContainer>
                            {inputPosition === "0" && 
                        <InputContainer>
                            <AiOutlineInfoCircle />
                                <select name='ano' {...register("ano")}>
                                    <option selected disabled defaultValue="">Selecione seu ano</option>
                                    <option value="1º Ano EF 1">1º Ano EF 1</option>
                                    <option value="2º Ano EF 1">2º Ano EF 1</option>
                                    <option value="3º Ano EF 1">3º Ano EF 1</option>
                                    <option value="4º Ano EF 1">4º Ano EF 1</option>
                                    <option value="5º Ano EF 2">5º Ano EF 2</option>
                                    <option value="6º Ano EF 2">6º Ano EF 2</option>
                                    <option value="7º Ano EF 2">7º Ano EF 2</option>
                                    <option value="8º Ano EF 2">8º Ano EF 2</option>
                                    <option value="1º Ano EM">1º Ano EM</option>
                                    <option value="2º Ano EM">2º Ano EM</option>
                                    <option value="3º Ano EM">3º Ano EM</option>
                                </select>
                        </InputContainer>
                            }
                        <button type='submit'>CADASTRAR</button>
                        <Link to="/">
                            <p>Voltar para login</p>
                        </Link>
                    </form>
                    <ImageDiv>
                        <ImageContainer />
                    </ImageDiv>
                </Content>
            </Container>
        </Background>
    )
};